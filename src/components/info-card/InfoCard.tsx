import React from 'react';

export interface InfoCardProps {
  title: string;
  content: string;
}

export function InfoCard(props: InfoCardProps) {

  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </div>
  )

}