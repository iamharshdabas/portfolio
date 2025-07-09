export const ImagePill = ({ image, className }) => {
  return (
    <div
      className={`mx-[2vw] my-[1em] h-[6vh] w-24 shrink-0 rounded-full border-2 border-dark bg-center bg-cover md:w-36 lg:w-48 ${className}`}
      style={{
        backgroundImage: `url(${image})`,
      }}
    />
  )
}
