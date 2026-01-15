const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="d-flex justify-content-center align-items-center gap-1">
        &copy; milkshop {currentYear}
      </div>
    </>
  );
};

export default Footer;
