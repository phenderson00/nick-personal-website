import "./Banner.css";

export interface BannerProps {
  title: string;
}

export function Banner(props: BannerProps) {
  return (
    <div className="banner">
      <h1>{props.title}</h1>
    </div>
  );
}