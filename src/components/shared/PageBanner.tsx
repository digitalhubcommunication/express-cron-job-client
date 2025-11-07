import Container from "../wrapper/Container";

type Props = {
  bgStyle?: string;
  containerStyle?: string;
  img: string;
  label: string;
  description: string;
  textStyle?:string;
  textWrapperStyle?:string;
};
export default function PageBanner({
  description,
  img,
  label,
  bgStyle = "",
  containerStyle = "",
  textStyle='',
  textWrapperStyle=''
}: Props) {
  return (
    <section
      className={`relative min-h-[300px] md:min-h-[400px] section-inner-speacing ${containerStyle}`}
    >
      <div className={`w-full z-20 flex items-center justify-center absolute top-0 left-0 h-full ${textWrapperStyle}`}>
        <Container className={textStyle}>
          <h1 className="text-center font-semibold uppercase">{label}</h1>
          <p className="text-center mt-2 ecj_fs-md">{description}</p>
        </Container>
      </div>

      {/* ========== background image =========== */}
      <div className={`bg-black w-full z-10 absolute top-0 left-0 h-full ${bgStyle}`}>
        <img
          className="w-full h-full object-cover"
          width={1200}
          height={400}
          src={img}
          alt="Banner background"
        />
      </div>
    </section>
  );
}
