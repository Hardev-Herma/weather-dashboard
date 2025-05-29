import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useQueryClient } from '@tanstack/react-query';
import styled from 'styled-components';
import { setCity, setUnit } from '../redux/weatherSlice';

const SearchContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0.75rem;
  }
`;

const Input = styled.input`
  padding: 0.75rem;
  font-size: clamp(0.9rem, 2.5vw, 1rem);
  border: none;
  border-radius: 5px;
  width: 100%;
  max-width: 300px;
  box-sizing: border-box;

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: clamp(0.9rem, 2.5vw, 1rem);
  background-color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e0e0e0;
  }

  @media (max-width: 600px) {
    width: 100%;
    max-width: 300px;
  }
`;

const UnitToggle = styled.select`
  padding: 0.75rem;
  font-size: clamp(0.9rem, 2.5vw, 1rem);
  border-radius: 5px;
  border: none;
  width: 100%;
  max-width: 150px;

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

function SearchBar() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const unit = useSelector((state) => state.weather.unit);
  const queryClient = useQueryClient();

  const handleSearch = () => {
    if (input.trim()) {
      dispatch(setCity(input));
      queryClient.invalidateQueries(['weather']);
      queryClient.invalidateQueries(['forecast']);
      setInput('');
    }
  };

  const handleUnitChange = (e) => {
    const newUnit = e.target.value;
    dispatch(setUnit(newUnit));
    queryClient.invalidateQueries(['weather']);
    queryClient.invalidateQueries(['forecast']);
  };

  return (
    <SearchContainer>
      <Input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter city name"
      />
      <Button onClick={handleSearch}>Search</Button>
      <UnitToggle value={unit} onChange={handleUnitChange}>
        <option value="metric">Celsius</option>
        <option value="imperial">Fahrenheit</option>
      </UnitToggle>
    </SearchContainer>
  );
}

export default SearchBar;