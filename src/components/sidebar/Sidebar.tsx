import React, { useEffect, useState, MouseEvent } from 'react';
import {
  List,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Collapse,
} from '@mui/material';
import { ExpandMore, NavigateNext, Circle } from '@mui/icons-material';
import Link from 'next/link';
import '@/styles/leetcode.css';

export const Sidebar = () => {
  const [open, setOpen] = useState({});
  const [leetCodeData, setLeetCodeData] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState([0, 0]);

  const handleListItemClick = (
    event: MouseEvent<HTMLDivElement, MouseEvent>,
    patternIndex: number,
    difficultyIndex: number,
    problemIndex: number
  ) => {
    setSelectedIndex([patternIndex, difficultyIndex, problemIndex]);
  };

  const colorMap = {
    Easy: 'green',
    Medium: '#FFC700',
    Hard: 'red',
  };

  const apiKey = process.env.NEXT_PUBLIC_AWS_API_KEY;
  useEffect(() => {
    fetch(
      'https://iucujk439g.execute-api.us-east-1.amazonaws.com/default/readTable?TableName=Leetcode',
      {
        method: 'GET',
        headers: {
          'X-Api-Key': apiKey,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setLeetCodeData(data);

        const initialOpenState = {};
        Object.keys(data).forEach((pattern, index) => {
          initialOpenState[index] = true;
        });
        setOpen(initialOpenState);
      });
  }, []);

  const toggleOpen = (patternIndex: number) => {
    setOpen((prevOpen) => ({
      ...prevOpen,
      [patternIndex]: !prevOpen[patternIndex],
    }));
  };

  return (
    <>
      {leetCodeData ? (
        <List sx={{ px: 1 }}>
          {Object.keys(leetCodeData).map((pattern: any, patternIndex: any) => {
            const patternTitle = pattern.split('-').join(' ');
            return (
              <>
                <ListItemButton
                  key={`list-btn-${pattern}`}
                  onClick={() => toggleOpen(patternIndex)}
                >
                  {open[patternIndex] ? (
                    <ExpandMore
                      key={`icon-less-${pattern}`}
                      fontSize='small'
                      sx={{ mr: 1 }}
                    />
                  ) : (
                    <NavigateNext
                      key={`icon-more-${pattern}`}
                      fontSize='small'
                      sx={{ mr: 1 }}
                    />
                  )}
                  <ListItemText
                    key={`list-txt-${pattern}`}
                    primary={patternTitle}
                  />
                </ListItemButton>
                <Collapse
                  key={`list-pattern-${pattern}`}
                  in={open[patternIndex]}
                  timeout='auto'
                  unmountOnExit
                >
                  <List
                    key={`list-collapsed-${pattern}`}
                    component='div'
                    disablePadding
                    sx={{ mb: 1 }}
                  >
                    {Object.keys(leetCodeData[pattern]).map(
                      (difficulty, difficultyIndex) => (
                        <>
                          <ListSubheader
                            key={`list-hdr-${pattern}-${difficulty}`}
                            sx={{ pl: 4 }}
                          >
                            LeetCode {difficulty}
                          </ListSubheader>

                          {leetCodeData[pattern][difficulty].map(
                            (item: any, problemIndex: any) => {
                              const id = item.id.S;
                              const name = item.name.S;

                              return (
                                <ListItemButton
                                  key={`list-btn-${pattern}-${id}`}
                                  dense
                                  className={'clickable'}
                                  component={Link}
                                  href={`/leetcode/${id}`}
                                  selected={
                                    selectedIndex[0] == patternIndex &&
                                    selectedIndex[1] == difficultyIndex &&
                                    selectedIndex[2] == problemIndex
                                  }
                                  onClick={(e) =>
                                    handleListItemClick(
                                      e,
                                      patternIndex,
                                      difficultyIndex,
                                      problemIndex
                                    )
                                  }
                                  sx={{ pl: 4 }}
                                  classes={{
                                    selected: 'selected',
                                  }}
                                >
                                  <Circle
                                    sx={{ color: colorMap[difficulty], pr: 1 }}
                                    key={`list-icon-${pattern}-${id}`}
                                  />
                                  <ListItemText
                                    primary={name}
                                    key={`list-txt-${pattern}-${id}`}
                                  />
                                </ListItemButton>
                              );
                            }
                          )}
                        </>
                      )
                    )}
                  </List>
                </Collapse>
              </>
            );
          })}
        </List>
      ) : (
        <></>
      )}
    </>
  );
};
