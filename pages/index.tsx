import React from 'react';
import { useTheme, View, Flex, Block } from 'vcc-ui';
import cars from '../public/api/cars.json';
import { ButtonsDisabled, Car } from '../types';
import Card from '../src/components/Card';
import { useState, useEffect } from 'react';
import Filter from '../src/components/Filter';
import Navigation from '../src/components/Navigation';
import useWindowSize from '../hooks/useWindowSize';

export default function HomePage() {
  const theme = useTheme();
  const [filter, setFilter] = useState('');
  const [page, setPage] = useState(0);
  const [totalCars, setTotalCars] = useState(0);
  const [currentWidth, setCurrentWidth] = useState(0);
  const breakpoints = [500, 720, 960, 2850];
  const { width } = useWindowSize();

  const amountToDisplay = () => {
    if (width < breakpoints[1]) {
      return 1;
    } else if (width <= breakpoints[2]) {
      return 2;
    } else if (width <= breakpoints[3]) {
      return 4;
    } else {
      return 5;
    }
  };

  const disabledButtons: ButtonsDisabled = {
    previous: false,
    next: false,
  };

  if (page === 0) {
    disabledButtons.previous = true;
  }
  if (page >= cars.length / amountToDisplay() - 1) {
    disabledButtons.next = true;
  }
  let output = cars.slice(amountToDisplay() * page);

  useEffect(() => {
    setTotalCars(
      output.filter(
        (car) =>
          car.modelName.toLowerCase().includes(filter.toLowerCase()) ||
          filter === ''
      ).length
    );
    if (width !== currentWidth) {
      setCurrentWidth(width);
      setPage(0);
    }
  }, [filter, output, currentWidth, width]);

  return (
    <View
      extend={{
        background: theme.color.background.primary,
        paddingTop: '3rem',
        paddingLeft: '3rem',
        marginRight: '3rem',
        margin: '0',
      }}
    >
      <Filter filter={filter} setFilter={setFilter} />
      <Flex
        extend={{
          overflow: 'hidden',
        }}
      >
        <Flex
          extend={{
            flexDirection: 'row',
          }}
        >
          {console.log(totalCars)}
          {output
            .filter(
              (car) =>
                car.modelName.toLowerCase().includes(filter.toLowerCase()) ||
                filter === ''
            )
            .map((car: Car, index: number) => {
              if (filter !== '' && amountToDisplay() >= totalCars) {
                disabledButtons.next = true;
              }
              return <Card key={index} {...car}></Card>;
            })}
        </Flex>
      </Flex>
      <Navigation disabled={disabledButtons} page={page} setPage={setPage} />
      <Block
        extend={{
          padding: '1rem',
          margin: '3rem',
          borderColor: 'black',
          borderWidth: '1px',
          borderStyle: 'solid',
          background: theme.color.background.secondary,
        }}
      >
        <code>Window width: {JSON.stringify(width)}</code>,
        <code> Cars per render: {amountToDisplay()}</code>,
        <code> Page: {page}</code>
        <code> Total cars: {totalCars}</code>
      </Block>
    </View>
  );
}
