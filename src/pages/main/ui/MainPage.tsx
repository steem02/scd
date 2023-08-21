import { useTheme } from "../../../app/providers/ThemeProvider";

interface MainPageProps {

}

export default function MainPage(props: MainPageProps) {
  const { toggleTheme } = useTheme();
  return <div>MAIN PAGE
    <div>
      <button
        onClick={ () => toggleTheme() }
      >тема
      </button>
    </div>
  </div>;
}