interface TProps {
  text: string;
}

const PageTitle = ({ text }: TProps) => {
  return <h2 className="page-title">{text}</h2>;
};

export default PageTitle;
