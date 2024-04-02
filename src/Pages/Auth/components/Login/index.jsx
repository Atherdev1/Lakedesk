import React, { useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { MdLockOutline } from "react-icons/md";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import "./style.css";
import ActionButton from "../../../../Common/ActionButton";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <div className="social_login_wrapper d-flex justify-content-center py-4 gap-3">
        <div className="social_login">
          <img
            src={
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABgFBMVEX///9RjvjxQzYotEb7uwCrxvtSkf3+//7s8v5SjfjxQzUps0fo8f5glvdsofwntEX/uwD+9fT3QzX7vgD97u396Ob5QTP/+vn5/frs+O5Ti//6qKL7/P/a5v3+vgAjt0QTtjv709H84N77jIX6xMDwOzj/+/Ly9/7g8+S2477B58hny3qB0pD2fXT1b2XxOir6ysf6Vkr8T0L4Nyf5u7f6xMH8Y1j95q/++ej2ihv+9Nz9xyb6sQn94Z391Xj97cn+1WL8xCKHsvrE2Pyf3aw+vlhMv2LO7NR/zo4ArixwyIBgyXT5m5XzW0/5gXn3sKv2kIv8pqDyJxL6ybr8y2P3lBn1aF74ohTyVi3zYyj0eSH8z0v84pT0bSX/zDj1fhz+46n7Tiv7mgCVu/t8qfq2z/zlvQB5uDBatT29uB2mtyVXtTuWtyjQuRGdtyX96r7DzGJuwKk2qYZMk98xrW1IltJEmsA7op0urmVAnq84pZFAnbIzqnk8oqQvrmub17Tu4rdWAAAPr0lEQVR4nO2diXfaVhaHBcIooNgYYQQYsFichMUgA4a4yTRpbMAOXnDa1F2SpjON0y3JZKaZpG2mnfnX5z4JMIsEepKeFp/5JScndQzSx13ffU8uRRESA79AsVg4mt3sH+cr1fOTWs2LVKudnFcr+eN+MxsNx2Lyd7tQ4bVobuf49LwuNhoNHsRxnAToDcLf0Bfg62L9/PR4JxtdC9t9u3hi1nLZnePqCScCGhf0qisIqKLInVQAM7dm931rVCy33c+D5cT5bFOcoliv5vvbuZjdt79IsWz/rFrjxKFDYoiDV9WqZ/2skyGzydNWXdRsOiVMvt46TWbtBlHWWh+MZ4RuIMhDtWrfWTEJqT62XeEbvGG6ISTfECvbMecUkVi032rwxq03Bdnq55xRQ9ayxzXzzDcmvlE7ztrvrWvbecgtBPiQOLGe37aXMdwkyDdk3LHRVzdPayaH36yCXP10xya+bKUO5iNNCOLqFTsqZDQvkkgvyuL5fNRivrVksGEZH1LDm7Qy5YSbVeLxNy1OPN+0LOVkzzjrHPRSvPfMinBkqPBOi2iBUFdQbEHlIN7J5c7q9vAhcfV8jjTg5rl9fBJjq0nUiOFjHUtbkxG5M4IJJ9eytkQoq9Ei5amxpi0pdFY8t0lk0rGWtCmFzooTHxEo/9G8CRMKsxTk86YjZqtOMSASxz0yO91stxwFKO6YHYibXicB8qLp3Vv/U+eEIABWzY7BWNIJVXCooNf0ih9+5CQP5WpJ0wGP6w5yUb7VNDvHOAuwUTW9YYs9chBgsFExv5VJOqmRaRybv6pwUhbl6gTGppuf2o11Ke6cwJBm24pxr0bxpwQWhVnn9KKceExgIhytOAeQ6xOYsa3lHQPI15pm01GoGXUMYINEjqGopuiULMNXiGzK5EyfGqKjXhyPfkvnv7hgUNtHWD8mMnUKt0ycqqGjQPVa67xaOc2fIeVPK9XzVq2u4WARVyOzO8ocm9XLcLxYb1XOHu00s7loeGiNWDiay27uJM+qrbrIz6EUzzdJ7FMwVNMcF+VE8eQ0iY5YqlwpHM02k6cnosqYMiieZsmcqcmZUerBeidnzdzaZRSN3+rl32Nruc2zEyVLBjkSZR4pfGYckGt4801V281cMbqd9zamrspxSVJn+HbqRvn4Rg17T3otWZs4V8XXN4nQUcbb0SBXr+i7uc1KfbQc5U+IbRSGz0RDfHwtv6374tt5+YBOkCOwmh+qaWhswdfzhkZFsWbey8Nil8Bqfqi1qoFaz/FVw0e0wjvVxkmf4DnhpAEfFWv9qNH6Ba/O9bdj5M4jRA0s6/mKSUe0iR70zutu13jRvPJF8CxCVrePEszuZipV0ZlmgvW8Mw4sL9JnqJvREYhcLWn3rWsRQ918/JH3hg5EvmX6liwh3b4b+Tx4I+jVuPoeAZ5nCWZ3M7X7yYYv8sWXuIj8uStyDNKbyIbPF/nLV8hRtSPyJ/Y/MKBNzO49H1LE9/UNr3Yz8icuCUHQ/UhERox8pD0Y+XO3WJCibt5b9Q0U+VxrMLooBinqzoOIb4T4xVeSpy4C5FoOfY5OQQz19BIQ5ZtvNARjsOaWOojE3B0n9EVWv/XeWGTFOrFREQm92fBNSS7+84Iwb/dNY+lJZJpwUfHnT9zRbEtiqN1pPt+g+KsbUXRRGgU9nTGhVPy/Qe2NMiTviuXESMyTmTCUEaH4KzuqWHFTlmGo+w+UAAfF36uwoOJq7qmE1EwxnMo3isXfxKGMJbr5WA1QLv7BaUS+avXjgIYETvpMnRA68W+nrRgkcQCLqD6OqHqpHIxT+YZzydxppLFlhVowfjk+vwnWiOw9ExND3ZltaGaD0Xu58ufy7koz0JPeXUQIiF8HR8W/rn/7zB4xHyuW+ylE30fDTpyv2H3HuBoMaBYyfocQQQ1i28+kdOfZQicdeCpabEA7Y/cNY+v+/Fox7qmw8vc23NVyQxQyf11QK8YRvw1yXvdM1wa6qS0MB/r8b+5a2VNoErywGk6Y8bvP7L5jbO0urobjhHd3jV7w1pKFugUXvL+hoRyOtHHvplHC68t+y+RJg5fe1pxokFZvM0Zb0uvLAY9VCuwD4T08J71j1ISI0DJE/xIa0WARfrJreFVhKeFeirqpsaMZOOnHhsPQWsIVINTa0UgmjNw2DGgt4fItateHkUojz+4bX/taSejxXKPuY/ioz/fkjssI19MUXrEwXg2tJtyfMypV0MZT44BWEgY8/hcUTjmMRD52HeES9QkO4d3bJgzZLPVS/3OFjcM5hM/euI5wj8Iq+E9MKBYWE15Qz3BWFmYUC4sJV6gHOISPDS8O7SDEqYePTSiHFhMuU1jl8LEJgBZ3bZiE91xHGPBcdUKPh8IAdCnh/23odsKrnkvhSpTaSRolrbqvHoIN8Xoa1xFCT3P1+9Krv7bAGgi7cn2Is8bfcOUaH2/bwmVzGmnj4krP2jxo1nb156VXfOYdSCueYVeV+/YtAteomxGMkr/hxr2nK75/eJGiGJyC6Mo9YOYeTmPqyn18vHLhM+UshnXrw324IF65MOU8jYW5NA0X3H1g8ZkoC8/T+FeuY59rAzc1WhENnYnC+3D8e+jUF97ZRMimRm147WJFvzxYiIHnt6TzpTiAq9//kDBoxNQ1/UpjmTAQeCFd8T5GV7P6+sdM28aHLV74sYy4nJZetfhxi0vAn0Ks0LGNj6KW/Tgm9F9cl16l8aw+KPJziKbZTNE2wH0cQHBSFIYUet5CowG/f0WzIZYVyrZ56QWWCYdhqOmZGQT4+geapsGINF2yCXB/GS+VLu9LL0PPPWlINauvX4IBQ8hNhV7cFsDUHpaTejyDMNTw7BoShCD8QoA03bHHiGBCHCeFapgavnTB84dgwMgrOsTKLoqMuJWwAfDWHma3tzwMwwXPkCLABz+wtOShskKCHekUmRCDMeBZSY9eO+85YAT4/TAEhxKOCpYDXr/ANGFgb+Sk857lRvpJYEM0PQYIRmxbnWxSS7grEv+L0YvBTe/O8dCfJ+0nG7FzYHHvlsZKM0jL6bGXqx/YR2WepmcIoexba8TUHu6y2X8x8QZqbgpLCZqeNSHI4gZ8CbMUTjip/LNNFEviZZmftiGEopV+msZbU3hQKr01+RaKbroql/lZA0qh2LXOT1Mr+Cbcm3qP2Z8xBFZ9xYL9VABR82aZDVG7hmnD9fTUezAz3TeEIKtuQfBT1qqSkVrCzqPSwzKTgNTTaSO+/hEFoBogYgx1inELzJja1zGcC7yYeZ87U8dOfnqpUCSmrCh0DwzPhxcrvRLAdVGPf/n6zPtMjNxWV/8eUi4S09mmQDyhpld05NH156nZdxp7aH11FUJwgQWHVjQ6eVuka/hp1DPVzwzEoB9fOswxLxeE4AiRFTpxoog66oRnMCed1ZuBEVdfh6Y77bmIJK2oz4LD8cWkGEo24moEddoaXHTICLFILN3oiEEkeZivoNsP0FLilQSokU8qi90DMnUxldZnQWUTDowIZX5Oo6bCKHSLJBBT+yv4rYwHDYLVTMiAEaHMa3fQkYROmzE/GJd07sIFVEwoMf7jJZrH4ALCZ4IGjOYipvb0bjPO9NzjKgmXEzUMsSwKRlN/4r/OHCM9cqhQC4diqF6GRQNRfLGCmX14asmvL8csMiFFJcCCugjBuTNlk3JqKo21PzFpQfT09ly1M7r4aCmndtpmDBmv600xsgmXFrx94kjQZ0MkQTgqGp2GJ4r/XF7XF4IS4IVKpbgUJBvdhHRIELZKRlw1XtoSQr+8XddtwjmVYnSNQ0E/IUSj0OkhRuxGDr2AKfU6UI2Ff71b11XqA2ot96QOukYQESNdlrY1cBil7y2WaVStIC933utBhBeszKkUlyoaAUSNKi1kOu2EdkjpuxLtTkZgUQ6AP4SHv67jL+w1+Si6HPip/mQjIUIDkKF7pURcvvv5nPCv8USpR2cEmmWH7xB6+MuyjmDcU1jZK12xYMxPpU1U6ACE7laxkBjkHWYqMEf/HU8USlvdjCCMtRrwEbGZP97izfGRj84OZ1RUNJJPRzcJxQPSTrt0UFCrIPHCQand68D3hdgJt0GtY+a39x4sTw34tfjo4PM91F33x++SRRVSoLvlw3YROEf2RHYDtmL7sNxF3xGi2ZmwQB9Q93csRP9zrYDgp4muoVCc4ISFB2B2ut1yr3coq9crH3U7EpyqsyBE9oNHe/H3r2goFJeIBbgpkxhlTKkbuFRI0twrsGj35w/N+cbv0RyEMqKh1kaNEyStzrSuXyDfdN5qtGJAcxAOEONtg/nUDLEhVmDfa0qp/iVNhWJciS2HINJ/alhq+J8vWDMpqVAWZlOcDYgh4cPb+SkVlvUXWEEoi5EbVNsZUYr64938fOPX1o7OIpZ0jGzMFwtW/O39PES/BzPLXCIWHyrUYusRoQWk/72u6qeBdZ2ACLGdcYQVocRkPgQUywZ8aX12MxRDTqgZEqLUiSvmm4WDmfmKt3UP38xFhE78P+8UHRW/EE4q0XZIuqHZTFeh+C8vYXSjSoImvC04wooo37B/TnXiAY9RQGnJ3za/RdUjtOcnfBjrxAMoBg0DyoiOyKiDxcZo0oiyqNEYHKn9cP5CxyKxqE397d3QUf3GysSkSqwzqgZCFH4PSGVDdyejJGjgjA6nTBJCzPwqLTZWTASU2vAyQrTfV9FiI4PG/he6mu15iIUth6RUNGn8z7s9HculRYhQGB3iqWzo4X91LHgXK14SHOCpqPILhva31IWG4ZmQvYjo2hlyxwWlLQ2bzQgGPCR4zAzeuNi1L+Gg85JCt0jg6M4YInjqoX0JBxmwgL/5iqt4UYpGG1w1ROh42ZTgAzxAZmR1HrzRK7SVdWjuqaQ5iPHSUSZk6YwKamDmqBS3BFAWLP0z0pa7FXTodybUtvqpzkRPECyZNUoHA4Se9Q88QjiWO+joBGlIdNaqbMuDx1CWir2OQLTJYeUDOmRL4FwlSlvIjoSclWVlPjseqx6IkRmlcyKmQ0qnAOitUsLCBKqsxMGhxGiqsw7OHR0e2Gi/McUL7W7G1AKJ3DPTbRfs+dkNimIOyoIZhpQ6JWQ+oVxy1P9yGN1Mog3VQ0qt+ilZafkA1UEq745ClHXQ7nWHJ4CwMdnB0Ztur31gN4iypE88flA8POoMKLUbk5UenQbjHR225cPiDrQfkrRyixdK7S2JUsak1aJTPmopD+vRsamjrXap4GQ8WfLNJQpgSwjLTCYzCE2kQfsjAbOyiREbfE+nfFgcHvBzNJ4s+RaZOMKEwJQ4EenoFJsUboOvdiDsENzggWIX4I005IzHEwC6tYXO6nUGZ4A73e5ReesQ0BLw74TZ/gd1dZH8G6QMdgAAAABJRU5ErkJggg=="
            }
            alt=""
          />
        </div>
        <div className="social_login">
          <img
            src={
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAmVBMVEU7WZj///9DYJtJZZ4/Xps3VZb3+PspTJGYpccxUZNIYp2/yd3d4uxjeavY3ek9XJtQbKUwUZdzh69ofarz9ffI0dqClrVbdaUlSY+vutLr7vWBkrrP1+aqttFWbqUoS5Dg5emZqcDCytfj5+2Onrx6jrK1wM9whrWNnsPT2ebHz+GgrswfRY53jLhrf6+jr8uOoLu5w9JdeKa56c0yAAAEzklEQVR4nO3daXeiMBSA4aAECFuhat3tYhdAbWfm//+40Vo7c860cCWG5Gbu+2E+zGmR54RFClHmfHR3P8jCsG9DYZgNftydYOz9X290LXLO7Inn+eDB+yNcP3KrfO8JcROfhPG10L06ShKD0VG4thR4IMYHofdoK3BPfBruhSPr9sC/Es97obXb6CE+9tidzUDG/BG7z3WvhNLyGzaweTc8bKasr3sdFNdnPd2roLie9UKXhOgjIf5IiD8S4o+E+CMh/kiIPxLij4T4QyDkp9r9usFCLvzbya0vxNEnuBC+Pzl2/G/QYgwV8j2FZy/FMqrKNH4vTcvFooqi6XITFLuXJAuZ2P9Q46JMFPLJliebaubU5nmzdRqFjUTzhEJkReXV6/6UNd51MUzIRTiPwLz9QCITcr4qFnAeOiEXWVCe5XNwbaWCz+G7H8Yx9PvThoMncuEkSc8eQFTC7a6Nz0GzH/Jt0RKIZAx5/tbOh2UMOd+0HEEkY8h5MGw9hDiE8xZnic8QCEUSSwARjCHvRRJADEIRyAARCEXW+jB6zHjhVmobRTCGfiIHNH8M/fOud/GNof8iO4SmC0UlKzR8KxWJzLsZDGPoLyVPFaYLeZjKAg0X+jvpjdTw/TBfygONHkMeyp4MD5ksFK8yl00ohMUZl/bebH24v/ZPZd9gIZ+CeXH1Nk+y0L36t+bX0SbkLvSyogwS5vu54F/V/ELahGIFO9AM31a+kJnWo08IO9DMCiY580yfEPQnNi9o+wjGZ/qEoD/kR0x63pm+I80GAIxf5SdH6hNC3rNF0tuozvMh4HQ4LHz519El5C5AuE4uMINXnxBwwk/dC8xv1SYMAcLqEpOwjRZOL7AbGi30ltYLN7cXeCWjhYH1Y0hCUCRUFQlJCI+EqiIhCeGRUFUkJCE8EqqKhCSER0JVWSIU3+dfQYTbmiW8p1noJjW9Nj+X6C1XdUvYLyPRKxTjuC7AsyaztHYJcVwBNmOVQulHnBtbbG0XLq0XFhPbhTvr90PIPWLUQsDTpciFaxewGqiFC8htftTCqeZ3beqFG+uFhfXCne1CL7H9SDNb2S4s+7YLI8gJH7VwCloNzMIN6MlFzMLCdqE3Bz2ciVg4gz3mjliYjm3fSqvMdmHUs10IOx1iFsJOh4iFHujqELNwBjsdIhaugbO+8ApL0PUvZmEFujrELIyu9AtXX82g/wxyh7T8/tfjADjrS+l9/K8m0B9zGehJhfzbJbig63vlwi9n0H98wjrgk+i8YFKzBCOENVnytElNJCQhPBKqioQkhEdCVZGQhPBIqCoSkhAeCVVFQhLCI6GqSEhCeCRUFQlJCI+EqiIhCeGRUFUkJCE8EqqKhCSER0JVkZCE8EioKhKSEB4JVUVCEsIjoapISEJ4JFQVCUkIj4SqIiEJ4ZFQVSQkITwSqoqEJIT3Pwj7F1jK+XUnDNmvC3xv8vl1JuQr9iOXX0yLF+5KmN+w1G6h/8CcgY7NtCshz4bMebBZmD87zBk+XeIrzM+sI6G4Hu6FTjzontiNMB+XzkHolN0TOxGK8YNzFDrxk+h4Z+xAyPPr1DkJneHP8STvEgkTtv/2eC4mq+fjx4mx0+JGj7/6vc5ys8jxmgp428X3xzcj70P2G0SvfjFQUs1EAAAAAElFTkSuQmCC"
            }
            alt=""
          />
        </div>
        <div className="social_login">
          <img
            src={
              "data:image/png;base64,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"
            }
            alt=""
          />
        </div>
      </div>
      <div className="or_text_wrapper">
        <div className="line"></div>
        <label>OR</label>
      </div>
      <div className="login_container mt-5  d-flex flex-column align-items-center">
      <div className="input_box mt-2 mt-lg-3">
        <label htmlFor="email" className="input_label">
          Business Email<span>*</span>
        </label>
        <div className="input_group">
          <span className="icon">
            <MdOutlineEmail color="lightgray" />
          </span>
          <input id="email" type="email" required placeholder="Business Email" />
        </div>
      </div>

      <div className="input_box mt-2 mt-lg-3">
        <label htmlFor="password" className="input_label">
          Password<span>*</span>
        </label>
        <div className="input_group password">
          <span className="icon">
            <MdLockOutline color="lightgray" />
          </span>
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            required
            placeholder="Password"
          />
          <span
            className="eye_icon"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <FiEyeOff color="lightgray" />
            ) : (
              <FiEye color="lightgray" />
            )}
          </span>
        </div>
      </div>
        <div className="mt-4 d-flex justify-content-center">
        <ActionButton px={30} py={10}>
          Log In
        </ActionButton>
      </div>
      </div>
    </>
  );
};

export default Login;
