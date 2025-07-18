function AboutCicle({
  widthMin,
  widthMid = '20vw', // default if not provided
  widthMax,
  heightMin,
  heightMid = '20vw', // default if not provided
  heightMax,
  children
}) {
  const responsiveWidth = `clamp(${widthMin}, ${widthMid}, ${widthMax})`;
  const responsiveHeight = `clamp(${heightMin}, ${heightMid}, ${heightMax})`;

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to top, #FBD1FF, #C6CAFD)`,
        width: responsiveWidth,
        height: responsiveHeight,
        borderRadius: '50%',
        boxShadow: '0px 10px 33px #FFCEF4',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {children}
    </div>
  );
}

export default AboutCicle;
