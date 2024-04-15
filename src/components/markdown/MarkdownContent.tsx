import React, { useState, useEffect, useRef } from 'react';
import Markdown, { RuleType } from 'markdown-to-jsx';
import TeX from '@matejmazur/react-katex';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Button, Link } from '@mui/material';
import { motion } from 'framer-motion';
import 'katex/dist/katex.min.css';

interface CodeBlockProps {
  className?: string;
  children: string | string[];
}

export const MarkdownContent = ({ id }: any) => {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch(`https://gulkaran-portfolio.s3.amazonaws.com/leetcode/${id}.md`)
      .then((res) => res.text())
      .then((data) => {
        let mathRegex = /(\$[^$]+\$)/g;
        let editedData = data
          .split(mathRegex)
          .map((part, index) => {
            if (part.match(mathRegex)) {
              return '<inlineMath>' + part.slice(1, -1) + '</inlineMath>';
            } else {
              return part;
            }
          })
          .join('');

        setContent(editedData);
      });
  }, []);

  const codeBlock = ({ className, children }: CodeBlockProps) => {
    let lang = 'text'; // default monospaced text
    if (className && className.startsWith('lang-')) {
      lang = className.replace('lang-', '');
    }
    return (
      <SyntaxHighlighter
        language={lang}
        style={oneDark}
        customStyle={{
          backgroundColor: '#191919',
          opacity: '1',
        }}
        codeTagProps={{
          style: {
            color: 'white',
          },
        }}
        children={children}
      />
    );
  };

  const renderTeX = (props: any) => {
    const mathContent = String(props.children);
    return <TeX math={mathContent} />;
  };

  const resizedImg = ({ src, alt, width, height }: any) => {
    if (height) {
      return (
        <Link
          href={'https://leetcode.com/problems/' + id}
          target='_blank'
          rel='noopener noreferrer'
          align='right'
          sx={{ float: 'right' }}
        >
          <Button
            variant='text'
            color='inherit'
            component={motion.div}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.9 }}
            sx={{ px: 2 }}
            startIcon={
              <img
                src='https://upload.wikimedia.org/wikipedia/commons/8/8e/LeetCode_Logo_1.png'
                alt='LeetCode'
                height={20}
                sx={{ mr: 0 }}
              />
            }
          >
            Link To LC
          </Button>
        </Link>
      );
    }

    return (
      <img src={src} alt={alt} style={{ maxWidth: '100%', height: 'auto' }} />
    );
  };

  return (
    <>
      <Markdown
        options={{
          overrides: {
            inlineMath: renderTeX,
            code: codeBlock,
            img: resizedImg,
          },
        }}
      >
        {content}
      </Markdown>
    </>
  );
};
