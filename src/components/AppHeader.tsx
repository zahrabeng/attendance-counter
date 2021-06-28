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
        <h1>work-in-progress app</h1>
      </header>
    );
  }
}
