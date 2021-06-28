interface AppHeaderProps {
  title: string;
}

export default function AppHeader({ title }: AppHeaderProps): JSX.Element {
  if (title.length >= 5) {
    return (
      <header>
        <h1>{title}</h1>
      </header>
    );
  } else {
    return (
      <header>
        <h1>{title}</h1>
        <p>(The title is a work-in-progress)</p>
      </header>
    );
  }
}
