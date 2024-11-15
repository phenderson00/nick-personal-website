export interface WorkCardProps {
  title: string;
  content: string;
}

export function WorkCard(props: WorkCardProps) {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  )
}