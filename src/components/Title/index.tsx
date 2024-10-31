type TitleProps = {
  title: string
}

const Title = ({ title }: TitleProps) => {
  return <h2 className="pt-2 font-bold text-xl">{title}</h2>
};

export default Title