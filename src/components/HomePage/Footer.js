import linkedIn from '../../assets/social-icons/logo-linkedin.svg';
import github from '../../assets/social-icons/logo-github.svg';
import twitter from '../../assets/social-icons/logo-twitter.svg';
import email from '../../assets/social-icons/icon-email.svg';

const ContactUs = () => {
  return (
    <footer className="py-20 text-white bg-black opacity-90">
      <div className="homepage-container flex flex-col items-center space-y-10 mb-10 sm:flex-row sm:justify-around sm:space-y-0">
        <div>
          <h3 className="text-xl font-semibold uppercase">
            Let's stay in touch
          </h3>
          <a
            href="mailto:godimfon@gmail.com"
            className="flex space-x-3 items-center justify-center"
          >
            <img src={email} alt="E-Mail" className="w-5 h-4 " />
            <p>godimfon@gmail.com</p>
          </a>
        </div>

        <div className="flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-6">
          <div className="text-center md:text-left">
            <h3 className="-mb-1">Follow Laon</h3>
            <p>We want to hear from you!</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/mfonpeeter/">
              <img
                src={linkedIn}
                alt="LinkedIn Logo"
                className="w-8 h-8 bg-white rounded-full transition-all ficon"
              />
            </a>
            <a href="https://github.com/mfonPeeter">
              <img
                src={github}
                alt="GitHub Logo"
                className="w-8 h-8 bg-white rounded-full transition-all ficon"
              />
            </a>
            <a href="https://twitter.com/mfonPeeter">
              <img
                src={twitter}
                alt="Twitter Logo"
                className="w-8 h-8 bg-white rounded-full transition-all ficon"
              />
            </a>
          </div>
        </div>
      </div>

      <p className="homepage-container text-center">
        Copyright &copy; 2022 Laon. Most of the products and designs came from
        <span>
          <a
            href="https://www.mi.com/ng/"
            className="mx-1 transition-all hover:border-b"
          >
            mi.com/ng
          </a>
          website
        </span>
      </p>
    </footer>
  );
};

export default ContactUs;
