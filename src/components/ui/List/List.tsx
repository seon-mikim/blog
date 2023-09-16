import React from 'react';

interface ListProps {
  children: React.ReactNode;
}
const List = ({ children }: ListProps) => {
  return <ul>{children}</ul>;
};

export default List;
