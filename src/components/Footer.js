const Footer = () => {
  const currentDate = new Date();
  return (
    <footer className="flex text-center px-4 py-8 justify-center">
      <p className="text-sm">
        Copyright {currentDate.getFullYear()} • All Rights Reserved by Kedeku
      </p>
    </footer>
  );
};

export default Footer;
