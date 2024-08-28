import Container from "./container";
import { useIntl } from "react-intl";

export default function Footer() {
  const intl = useIntl();
  return (
    <footer>
      <Container maxWidth="max-w-[1320px] z-30 relative">
        <div className="w-full max-w-screen-xl relative mx-auto py-16">
          <div className="flex flex-wrap">
            <div className="w-full md:w-6/12">
              <p className="text-xl tracking-tight font-semibold">
                {intl.formatMessage({ id: "footer.title" })}
              </p>
              <input className="hidden" defaultValue={"hello@prototypr.io"} />

              <p className="text-base mt-0 text-gray-700">
                {intl.formatMessage({ id: "footer.subtitle" })} 💌
              </p>
              <p className="text-sm text-gray-700 font-semibold mt-2">
                {" "}
                © 2024 Prototypr,{" "}
                {intl.formatMessage({ id: "footer.copyright" })}
              </p>
            </div>

            <div className="w-full md:w-6/12">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full md:w-6/12 xl:w-4/12 pt-6 md:pt-0 md:px-4 ml-auto">
                  <span className="block uppercase text-gray-900 text-sm font-semibold mb-2 tracking-wide">
                    {intl.formatMessage({ id: "footer.rightCat1" })}
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-gray-700 hover:text-gray-900 font-base block py-3 text-base"
                        rel="noreferrer"
                        href="https://help.prototypr.io"
                        target="_blank"
                      >
                        {intl.formatMessage({ id: "footer.helplink" })}
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-700 hover:text-gray-900 font-base block py-3 text-base"
                        rel="noreferrer"
                        href="https://github.com/Prototypr"
                        target="_blank"
                      >
                        {intl.formatMessage({ id: "footer.rightCat2" })}
                      </a>
                    </li>
                    <li>
                      {/* <Link href="/posts" as="/posts"> */}
                      <a
                        href="https://open.prototypr.io"
                        target="_blank"
                        className="text-gray-700 hover:text-gray-900 font-base block py-3 text-base"
                      >
                        {intl.formatMessage({ id: "footer.rightCat3" })}
                      </a>
                      {/* </Link> */}
                    </li>
                    <li>
                      <a
                        className="text-gray-700 hover:text-gray-900 font-base block py-3 text-base"
                        rel="noreferrer"
                        href="https://twitter.com/prototypr"
                        target="_blank"
                      >
                        Twitter
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-700 hover:text-gray-900 font-base block py-3 text-base"
                        rel="noreferrer"
                        href="https://instagram.com/prototyprio"
                        target="_blank"
                      >
                        Instagram
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full md:w-6/12 xl:w-4/12 pt-6 md:pt-0 ml-auto">
                  <span className="block uppercase text-gray-900 text-sm font-semibold mb-2 tracking-wide">
                    {intl.formatMessage({ id: "footer.otherResource" })}
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-gray-700 hover:text-gray-900 font-base block py-3 text-base"
                        rel="noreferrer"
                        href="https://adobe.com/products/xd/adobe-fund.html"
                        target="_blank"
                      >
                        {intl.formatMessage({ id: "footer.other1" })}
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-700 hover:text-gray-900 font-base block py-3 text-base"
                        rel="noreferrer"
                        href="https://grantfortheweb.org"
                        target="_blank"
                      >
                        {intl.formatMessage({ id: "footer.other5" })}
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-700 hover:text-gray-900 font-base block py-3 text-base"
                        rel="noreferrer"
                        href="https://interledger.org/"
                        target="_blank"
                      >
                        {intl.formatMessage({ id: "footer.other2" })}
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-700 hover:text-gray-900 font-base block py-3 text-base"
                        rel="noreferrer"
                        href="https://letter.so"
                        target="_blank"
                      >
                        {intl.formatMessage({ id: "footer.other3" })}
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-700 hover:text-gray-900 font-base block py-3 text-base"
                        rel="noreferrer"
                        href="https://prototypr.io/privacy-policy/"
                        target="_blank"
                      >
                        {intl.formatMessage({ id: "footer.other4" })}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
