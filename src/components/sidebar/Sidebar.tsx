'use client';

import React, { useEffect, useState, MouseEvent } from 'react';
import {
  List,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Collapse,
  Typography,
} from '@mui/material';
import { ExpandMore, NavigateNext, Circle } from '@mui/icons-material';
import Link from 'next/link';
import '@/styles/leetcode.css';

export const Sidebar = () => {
  const [open, setOpen] = useState({});
  const [leetCodeData, setLeetCodeData] = useState<any[]>([]);
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

  const apiKey = process.env.NEXT_PUBLIC_AWS_API_KEY!;
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

        const initialOpenState: Record<number, boolean> = {};
        Object.keys(data).forEach((pattern, index) => {
          initialOpenState[index as keyof object] = false;
        });
        setOpen(initialOpenState);
      });
  }, []);

  const toggleOpen = (patternIndex: number) => {
    setOpen((prevOpen) => ({
      ...prevOpen,
      [patternIndex]: !prevOpen[patternIndex as keyof object],
    }));
  };

  return (
    <>
      <Typography
        variant='h6'
        sx={{ px: 2.5, pt: 3.5, pb: 1, fontWeight: 'medium' }}
      >
        Leetcode Patterns 🧩
      </Typography>
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
                  {open[patternIndex as keyof object] ? (
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
                  in={open[patternIndex as keyof object]}
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
                                  onClick={(e: any) =>
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
                                    sx={{
                                      color:
                                        colorMap[difficulty as keyof object],
                                      pr: 1,
                                    }}
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
