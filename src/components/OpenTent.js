import React from "react";
import "./OpenTent.css";

function OpenTent() {
  return (
    <div className="container bg-slate-200">
      <div className="relative h-full dark:bg-black">
        <div>
          <div className="max-w-screen-2xl mx-auto w-full pt-3.5 px-7 mb-8">
            <h1 className="flex justify-between items-center text-center font-light relative text-lg">
              <div className="absolute px-5 z-10">
                <a
                  href="https://app.tradingtent.io"
                  content="Dashboard"
                  className="absolute top-3 left-3 inline-block hover:opacity-80 transition duration-200 ease-in-out text-blue-dark dark:text-gray-lightest"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 108 55"
                    fill="none"
                    className="w-[108px] h-[55px] fill-current"
                  >
                    <path
                      d="M48.5397 7.73703C49.5984 8.14424 50.8201 7.81847 51.3087 6.75972V6.67828C51.8788 5.29376 52.0417 3.66491 51.6345 2.28039C51.3902 1.54741 50.8201 1.05875 50.0871 0.895867C49.9242 0.895867 49.7613 0.814424 49.5984 0.814424C47.5624 0.244327 45.0377 0 42.1057 0C38.7666 0 35.346 0.244327 31.9254 0.651539C28.5863 1.05875 25.3286 1.54741 22.1523 2.28039C19.0575 2.93193 16.1256 3.66491 13.438 4.56078C10.7504 5.3752 8.38857 6.27107 6.43395 7.16693C4.39789 7.98136 2.85048 8.87722 1.71029 9.77309C0.570097 10.669 0 11.4834 0 12.2164C0 12.6236 0.0814424 13.1122 0.244327 13.5194C0.407212 13.9267 0.651539 14.3339 0.895867 14.6596C1.14019 14.9854 1.46596 15.2297 1.87318 15.4741C2.19895 15.6369 2.60616 15.7998 3.09481 15.7998C3.2577 15.7998 3.42058 15.7998 3.58347 15.7184C3.74635 15.6369 3.99068 15.6369 4.15356 15.5555C6.18962 14.904 8.14424 14.171 9.93598 13.5194C11.7277 12.8679 13.5194 12.2164 15.3112 11.6463C17.1029 11.0762 18.8946 10.5061 20.6864 9.93598C21.8266 9.61021 23.1296 9.28444 24.3513 9.04011C24.1884 9.20299 24.107 9.44732 23.9441 9.61021C22.5596 11.5648 21.0121 14.0081 19.3019 16.8586C17.5916 19.6276 15.7998 22.8039 13.8452 26.2245C11.972 29.645 9.93598 33.31 7.89992 37.3006C5.86385 41.2913 3.82779 45.3634 1.71029 49.6799C1.46596 50.0871 1.30308 50.4943 1.22164 50.9015C1.14019 51.2273 1.14019 51.5531 1.14019 51.8788C1.14019 52.7747 1.46596 53.4262 2.03606 53.8334C2.44327 54.1592 3.17625 54.4035 4.07212 54.4035C4.64222 54.4035 5.29376 54.3221 6.02674 54.0778C6.67828 53.9149 7.41126 53.5891 8.0628 53.1819C8.71434 52.7747 9.36588 52.286 9.93598 51.6345C10.5061 50.983 10.9947 50.25 11.4019 49.4356C11.8092 48.7026 12.3792 47.7253 13.0308 46.4222C13.6823 45.1191 14.4968 43.6531 15.3112 41.9429C16.1256 40.314 17.0215 38.5223 17.9988 36.5677C18.9761 34.613 19.9534 32.577 21.0121 30.5409C21.9895 28.4234 23.0482 26.3059 24.107 24.2698C25.1657 22.1523 26.143 20.1163 27.1203 18.1617C28.0976 16.207 28.9935 14.3339 29.8079 12.5421C30.7038 10.7504 31.4368 9.20299 32.1698 7.81847C32.1698 7.73703 32.1698 7.73703 32.2512 7.65559C32.6584 7.57415 33.0656 7.57415 33.4728 7.4927C35.9161 7.24838 38.7666 7.00405 41.78 6.92261C44.8748 6.92261 47.0737 7.16693 48.3768 7.57415C48.2954 7.57415 48.4582 7.65559 48.5397 7.73703Z"
                      fill="current-color"
                    ></path>
                    <path d="M107.83 26.143C107.667 25.8172 107.423 25.6544 107.097 25.4915C106.771 25.3286 106.445 25.1657 105.957 25.1657C105.55 25.0843 105.061 25.0843 104.491 25.0843H93.7404C94.5548 23.5369 95.3693 22.0709 96.1022 20.6049C96.428 20.0348 96.7538 19.3833 97.0795 18.7318C97.4053 18.0802 97.7311 17.5101 98.0569 16.94C98.3826 16.3699 98.7084 15.7998 98.9527 15.3112C99.2785 14.8225 99.4414 14.3339 99.6857 13.9267C100.011 13.3566 100.256 12.8679 100.419 12.4607C100.582 12.0535 100.744 11.5648 100.744 11.1576C100.744 10.3432 100.5 9.77309 99.93 9.44732C99.3599 9.12155 98.7898 8.95866 98.1383 8.95866C97.4053 8.95866 96.7538 9.12155 96.1022 9.52876C95.4507 9.85453 94.962 10.5061 94.4734 11.3205L87.4693 25.1657H83.8859C83.3972 25.1657 82.9086 25.2471 82.5014 25.4915C82.0941 25.6544 81.7684 25.8987 81.4426 26.2245C81.1983 26.4688 80.9539 26.7946 80.7911 27.1203C80.6282 27.4461 80.6282 27.6904 80.6282 27.9347C80.6282 28.4234 80.8725 28.9121 81.3612 29.3193C81.8498 29.7265 82.6642 29.8894 83.8859 29.8894H85.2704C84.6189 31.111 84.0488 32.4141 83.3158 33.7172C82.8271 34.7759 82.257 35.8347 81.7684 36.9749C80.954 37.6264 79.9766 38.2779 78.9993 38.9295C77.8591 39.6625 76.6375 40.314 75.4159 41.047C74.1942 41.6985 72.9726 42.2686 71.751 42.6758C71.4252 42.8387 71.2623 43.0016 71.018 43.0016C70.8551 43.0016 70.6108 43.0016 70.5293 43.0016C70.285 43.0016 70.1221 42.9202 70.0407 42.8387C69.9592 42.6758 69.8778 42.5129 69.8778 42.3501C69.8778 41.8614 70.0407 41.4542 70.285 41.1284C70.5293 40.7212 70.7736 40.2326 71.1809 39.6625C71.5881 39.0109 71.9953 38.3594 72.4839 37.6264C72.9726 36.8934 73.3798 36.1604 73.8685 35.346C74.3571 34.5316 74.7643 33.6357 75.1715 32.8213C75.5788 31.9254 75.9045 31.111 76.1488 30.2151C76.3932 29.3193 76.4746 28.5048 76.4746 27.7719C76.4746 26.4688 76.0674 25.4915 75.253 24.9214C74.52 24.3513 73.5427 24.0255 72.3211 24.0255C71.2623 24.0255 70.2035 24.1884 68.9819 24.5142C67.8417 24.8399 66.7015 25.2472 65.6428 25.8172C64.584 26.3059 63.6067 26.876 62.7108 27.5275C61.815 28.1791 61.082 28.8306 60.5933 29.4007C60.7562 28.9935 60.9191 28.6677 60.9191 28.342C61.0006 28.0162 61.0006 27.6904 61.0006 27.4461C61.0006 26.7131 60.7562 26.143 60.349 25.7358C59.9418 25.3286 59.4532 25.1657 58.9645 25.1657C58.313 25.1657 57.6614 25.41 57.0099 25.8987C56.3583 26.3873 55.7882 27.0389 55.381 28.0162C55.0553 28.7492 54.5666 29.7265 53.9965 30.7852C53.4264 31.9254 52.8563 33.0656 52.2862 34.2873C51.879 35.1831 51.3903 36.1604 50.9017 37.0563C50.6574 37.1377 50.413 37.3006 50.0058 37.545C49.4357 37.8707 48.7027 38.2779 47.8069 38.7666C46.911 39.2552 46.0151 39.7439 44.875 40.314C43.8162 40.8027 42.676 41.3727 41.5358 41.78C40.3956 42.2686 39.2554 42.5944 38.1152 42.9202C36.975 43.2459 35.9163 43.3274 34.8575 43.3274C33.8802 43.3274 33.1472 43.1645 32.5771 42.8387C32.0071 42.4315 31.6813 41.9428 31.5184 41.2913C34.5318 40.1511 36.975 39.0924 39.0111 38.0336C41.0472 36.8934 42.5946 35.8347 43.8162 34.8574C45.0378 33.7986 45.8523 32.7399 46.3409 31.7625C46.8296 30.7852 47.0739 29.8079 47.0739 28.8306C47.0739 27.2832 46.5852 26.0616 45.6894 25.1657C44.7935 24.2698 43.409 23.8626 41.6173 23.8626C39.907 23.8626 38.2781 24.107 36.7307 24.5956C35.1833 25.0843 33.7988 25.7358 32.5771 26.6317C31.2741 27.4461 30.1339 28.4234 29.0751 29.5636C28.0978 30.6223 27.2019 31.7625 26.469 32.9027C25.736 34.0429 25.2473 35.1831 24.8401 36.3233C24.4329 37.4635 24.27 38.4408 24.27 39.4181C24.27 40.6398 24.4329 41.8614 24.8401 42.9202C25.2473 44.0604 25.736 45.0377 26.469 45.8521C27.2019 46.7479 28.0978 47.3995 29.0751 47.8881C30.1339 48.3768 31.2741 48.6211 32.5771 48.6211C34.1246 48.6211 35.672 48.3768 37.3008 47.9696C38.8482 47.5624 40.3956 47.0737 41.8616 46.4222C43.3275 45.7706 44.7121 45.1191 46.0151 44.3861C46.7481 43.9789 47.3997 43.5717 47.9698 43.2459C47.8069 43.5717 47.7254 43.8975 47.5626 44.2232C47.2368 45.0377 47.0739 45.6892 47.0739 46.015C47.0739 46.748 47.3182 47.318 47.7254 47.8067C48.1327 48.2954 48.7842 48.5397 49.5172 48.5397C50.2502 48.5397 50.9017 48.2954 51.3903 47.8067C51.879 47.318 52.3677 46.7479 52.7749 46.0964C53.1821 45.3634 53.5078 44.6304 53.9151 43.816C54.3223 43.0016 54.7295 42.1872 55.1367 41.4542C55.8697 40.3954 56.6841 39.1738 57.58 37.7893C58.4758 36.4048 59.5346 35.1017 60.5933 33.9615C61.7335 32.7399 62.8737 31.6811 64.0954 30.8667C65.3984 30.0523 66.7015 29.645 68.086 29.645C68.4933 29.645 68.7376 29.7265 68.9005 29.9708C69.0634 30.2151 69.2262 30.4595 69.2262 30.7852C69.2262 31.1924 69.0634 31.6811 68.819 32.2512C68.4933 32.8213 68.1675 33.5543 67.7603 34.2873C67.3531 35.0202 66.8644 35.8347 66.3758 36.7305C65.8871 37.545 65.3984 38.4408 64.9098 39.2552C64.5026 40.1511 64.0954 40.9655 63.7696 41.78C63.4438 42.5944 63.2809 43.3274 63.2809 44.0603C63.2809 44.2232 63.1995 44.3861 63.1995 44.549C63.1995 44.7119 63.1995 44.7933 63.1995 44.9562C63.1995 46.0964 63.4438 47.0737 64.0139 47.7253C64.584 48.3768 65.3984 48.7026 66.6201 48.7026C67.0273 48.7026 67.4345 48.6211 67.9232 48.5397C68.4118 48.4582 68.9005 48.2954 69.4706 48.1325C71.1809 47.6438 72.5654 47.1552 73.787 46.5851C75.0087 46.015 76.2303 45.4449 77.289 44.7933C78.022 44.3861 78.755 43.8975 79.488 43.4088C79.488 43.6531 79.488 43.9789 79.488 44.2232C79.488 44.8748 79.5694 45.4449 79.7323 45.9335C79.8952 46.4222 80.1395 46.9108 80.4653 47.318C80.8725 47.7253 81.3612 48.051 81.9313 48.2139C82.5014 48.4582 83.2343 48.5397 84.1302 48.5397C85.4333 48.5397 86.8178 48.2954 88.2023 47.7253C89.5868 47.2366 91.0528 46.5036 92.4373 45.6078C93.9033 44.7119 95.3693 43.6531 96.8352 42.5129C98.3012 41.3728 99.7671 40.1511 101.152 38.848C101.803 38.3594 102.21 37.7893 102.455 37.3006C102.699 36.812 102.781 36.2419 102.781 35.7532C102.781 35.2646 102.699 34.8574 102.455 34.5316C102.21 34.2058 101.885 34.0429 101.559 34.0429C101.233 34.0429 100.907 34.1244 100.582 34.3687C99.93 34.8574 99.2785 35.5089 98.4641 36.079C97.6497 36.7305 96.8352 37.3006 95.9394 37.9522C95.0435 38.6037 94.2291 39.1738 93.3332 39.7439C92.4373 40.314 91.5415 40.8027 90.727 41.2913C89.9126 41.6985 89.1796 42.1057 88.4467 42.3501C87.7137 42.5944 87.1436 42.7573 86.7364 42.7573C86.4106 42.7573 86.1663 42.6758 86.0034 42.5129C85.8405 42.3501 85.8405 42.1057 85.8405 41.78C85.8405 41.2913 85.9219 40.6398 86.1663 39.9882C86.4106 39.2552 86.6549 38.6851 86.9807 38.1151C87.6322 36.812 88.2838 35.4275 89.0167 33.9615C89.7497 32.4141 90.4827 30.8667 91.2971 29.3193L105.061 29.2378C105.631 29.1564 106.12 29.0749 106.445 28.9935C106.853 28.8306 107.097 28.6677 107.341 28.5048C107.586 28.342 107.667 28.0976 107.749 27.8533C107.83 27.609 107.911 27.3647 107.911 27.1203C108.074 26.7946 107.993 26.3873 107.83 26.143ZM31.9256 35.9161C32.1699 35.2646 32.4957 34.6945 32.9029 33.9615C33.3101 33.31 33.7173 32.577 34.1246 31.9254C34.6132 31.2739 35.1833 30.6223 35.7534 30.1337C36.4049 29.5636 37.0565 29.1564 37.7895 28.8306C38.5224 28.5048 39.3369 28.342 40.1513 28.342C40.2327 28.342 40.3956 28.342 40.4771 28.342C40.5585 28.342 40.6399 28.342 40.8028 28.342C41.0472 28.4234 41.2915 28.5048 41.5358 28.6677C41.7801 28.8306 41.8616 29.1564 41.8616 29.4822C41.8616 29.8894 41.6987 30.378 41.2915 30.8667C40.8843 31.3553 40.2327 32.0069 39.2554 32.577C39.0111 32.7399 38.6853 32.9842 38.1152 33.31C37.6266 33.7172 36.975 34.1244 36.2421 34.5316C35.5091 35.0202 34.6946 35.5089 33.8802 35.9976C33.0658 36.4862 32.2514 36.9749 31.5184 37.3821C31.437 37.0563 31.6813 36.5676 31.9256 35.9161Z"></path>
                  </svg>
                </a>
              </div>

              <div className="max-w-xl w-11/12 flex mx-auto">
                <div className="img">
                  <div className="">
                    <img
                      className="bg-[blue] rounded-full w-[5rem]"
                      src="https://app.tradingtent.io/images/tent.png"
                      alt=""
                      srcset=""
                    />
                  </div>
                </div>
                <div className="img">
                  <div className="">
                    <img
                      className="bg-[silver] rounded-full w-[5rem]"
                      src="https://app.tradingtent.io/images/diamond_inactive.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="img">
                  <div className="">
                    <img
                      className="bg-[silver] rounded-full w-[5rem]"
                      src="https://app.tradingtent.io/images/lock_inactive.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="img">
                  <div className="">
                    <img
                      className="bg-[silver] rounded-full w-[5rem]"
                      src="https://app.tradingtent.io/images/check_inactive.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </h1>

            {/* number-2 */}

            <div className="text-center mt-16 pb-8 mx-auto bg-white ">
              <div>
                <img
                  className="rounded-full h-[5rem] mx-auto mt-[-4rem]"
                  src="https://app.tradingtent.io/images/tent.png"
                  alt=""
                  srcset=""
                />

                {/* number-3 */}

                <p className="font-bold text-lg">Welcome to your Tent!</p>

                <div className="">
                  <p className="flex justify-center font-bold text-xl bg-white rounded-full text-[blue] ">
                    We are now waiting for a partner
                    <img className="mt-[5px] ml-2 animate-spin h-5 w-5 mr-3 rounded-full border-dotted border-black border-x-4" />
                  </p>

                  <div>
                    <p className="text-center mt-4">
                      Once your partner joins you will be
                    </p>
                    <p className="text-center">
                      able to select and trade assets.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* number-4 */}

      {/*
     
      <div className="grid grid-cols-3 bg-white">
        <div className="footer text-slate-500">
          <p className="text-center text-xl ">You will send</p>
          <p className="text-center pt-8">
            Your havent selected any Native Assets.
          </p>
          <div className="bg-gray-300 dark:bg-blue rounded-lg p-1.5 absolute left-[496px]">
            <a
              href="javascript:void(0)"
              className="image-select min-h-full flex flex-col w-28"
            >
              <div className="h-24 w-24 img-container mx-auto flex items-center justify-center rounded-lg bg-blue dark:bg-blue overflow-hidden relative">
                <div className="p-2 rounded-full ada-container">
                  <div className="bg-gray-lightest dark:bg-blue-darker rounded-lg p-1.5 absolute right-0 top-0 bottom-0">
                    <a
                      href="javascript:void(0)"
                      className="image-select min-h-full flex flex-col w-28"
                    >
                      <div className="h-24 w-24 img-container mx-auto flex items-center justify-center rounded-lg bg-blue dark:bg-blue-darkest overflow-hidden relative">
                        <div className="p-2 rounded-full ada-container">
                          <svg
                            width={21}
                            height={22}
                            viewBox="0 0 21 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M19.3896 13.6921H1.21661"
                              stroke="white"
                              strokeWidth="2.27888"
                              strokeLinecap="round"
                            />{" "}
                            <path
                              d="M19.3896 9.92578H1.21661"
                              stroke="white"
                              strokeWidth="2.27888"
                              strokeLinecap="round"
                            />{" "}
                            <path
                              d="M17.4532 20.0592L11.2821 1.95533L9.7685 1.95533"
                              stroke="white"
                              strokeWidth="2.27888"
                              strokeLinecap="round"
                            />{" "}
                            <line
                              x1="1.13944"
                              y1="-1.13944"
                              x2="19.3263"
                              y2="-1.13944"
                              transform="matrix(0.322643 -0.946521 -0.97853 -0.206104 2.71387 20.5562)"
                              stroke="white"
                              strokeWidth="2.27888"
                              strokeLinecap="round"
                            />{" "}
                            <path
                              d="M3.24799 20.0592L9.41912 1.95533L10.9327 1.95533"
                              stroke="white"
                              strokeWidth="2.27888"
                              strokeLinecap="round"
                            />{" "}
                            <line
                              x1="1.13944"
                              y1="-1.13944"
                              x2="19.3263"
                              y2="-1.13944"
                              transform="matrix(-0.322643 -0.946521 0.97853 -0.206104 17.9883 20.5562)"
                              stroke="white"
                              strokeWidth="2.27888"
                              strokeLinecap="round"
                            />
                          </svg>
                        </div>
                      </div>{" "}
                      <div className="flex-grow flex flex-col justify-center">
                        <p className="text-base leading-tight text-center font-medium text-blue-dark dark:text-gray-lightest w-full">
                          0
                        </p>{" "}
                        <p className="text-base leading-tight text-center font-medium text-blue-dark dark:text-gray-lightest w-full">
                          ADA
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex-grow flex flex-col justify-center">
                <p className="text-base leading-tight text-center font-medium text-blue-dark dark:text-gray-lightest w-full">
                  0
                </p>
                <p className="text-base leading-tight text-center font-medium text-blue-dark dark:text-gray-lightest w-full">
                  ADA
                </p>
              </div>
            </a>
          </div>
        </div>
        <div className="footer">
          <h2 className="text-center font-bold text-lg text-[#041C32]">
            Transaction Summary
          </h2>
        </div>
        <div className="footer text-center text-slate-500">
          <p className="text-xl">You will receive</p>
          <p className="pt-8">
            Your trade partner hasnt selected any Native Assets.
          </p>
        </div>
      </div>
*/}

      
      <div
        className="footer shadow fixed bottom-0 w-full bg-white dark:bg-blue-darkest"
        style={{ height: 225 }}
      >
        <div className="grid grid-cols-footer">
          <div className="justify-between flex flex-col">
            <h2 className="text-center py-1.5 leading-150 text-xl text-gray-700 dark:text-gray">
              You will send
            </h2>
            <div
              className="relative ml-3"
              style={{ height: 157, marginBottom: 10 }}
            >
              <div className="bg-gray-200 dark:bg-blue rounded-lg p-1.5 absolute right-0 top-0 bottom-0">
                <a
                  href="javascript:void(0)"
                  className="image-select min-h-full flex flex-col w-28"
                >
                  <div className="h-24 w-24 img-container mx-auto flex items-center justify-center rounded-lg bg-blue dark:bg-blue-darkest overflow-hidden relative">
                    <div className="p-2 rounded-full ada-container">
                      <svg
                        width={21}
                        height={22}
                        viewBox="0 0 21 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19.3896 13.6921H1.21661"
                          stroke="white"
                          strokeWidth="2.27888"
                          strokeLinecap="round"
                        />{" "}
                        <path
                          d="M19.3896 9.92578H1.21661"
                          stroke="white"
                          strokeWidth="2.27888"
                          strokeLinecap="round"
                        />{" "}
                        <path
                          d="M17.4532 20.0592L11.2821 1.95533L9.7685 1.95533"
                          stroke="white"
                          strokeWidth="2.27888"
                          strokeLinecap="round"
                        />{" "}
                        <line
                          x1="1.13944"
                          y1="-1.13944"
                          x2="19.3263"
                          y2="-1.13944"
                          transform="matrix(0.322643 -0.946521 -0.97853 -0.206104 2.71387 20.5562)"
                          stroke="white"
                          strokeWidth="2.27888"
                          strokeLinecap="round"
                        />{" "}
                        <path
                          d="M3.24799 20.0592L9.41912 1.95533L10.9327 1.95533"
                          stroke="white"
                          strokeWidth="2.27888"
                          strokeLinecap="round"
                        />{" "}
                        <line
                          x1="1.13944"
                          y1="-1.13944"
                          x2="19.3263"
                          y2="-1.13944"
                          transform="matrix(-0.322643 -0.946521 0.97853 -0.206104 17.9883 20.5562)"
                          stroke="white"
                          strokeWidth="2.27888"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-grow flex flex-col justify-center">
                    <p className="text-base leading-tight text-center font-medium text-blue dark:text-gray-lightest w-full">
                      0
                    </p>{" "}
                    <p className="text-base leading-tight text-center font-medium text-blue dark:text-gray-lightest w-full">
                      ADA
                    </p>
                  </div>
                </a>
              </div>
              <div className="trade-nfts flex flex-row-reverse overflow-x-auto">
                <div className="flex w-full flex-nowrap">
                  <div
                    className="w-full text-center font-light text-gray-400 dark:text-gray-regular pt-8"
                    style={{ height: 128 }}
                  >
                    Your havent selected any Native Assets.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="separator flex items-center flex-grow-0">
            <div className="mx-auto relative flex items-center">
              <p
                className="absolute w-48 text-center text-base font-bold text-blue dark:text-gray-lightest -top-7"
                style={{ transform: "translate(-73px, -4px)" }}
              >
                Transaction Summary
              </p>
              <div className="separator-icon w-12 h-12 rounded-full flex justify-center items-center bg-gray-200 dark:bg-blue">
                <img
                  src="https://app.tradingtent.io/images/trade.png"
                  alt="Trade icon"
                  className="w-5"
                />
              </div>
            </div>
          </div>
          <div className="justify-between flex flex-col">
            <h2 className="text-center py-1.5 leading-150 text-xl text-gray-800 dark:text-gray">
              You will receive
            </h2>
            <div
              className="relative mr-3"
              style={{ height: 157, marginBottom: 10 }}
            >
              <div className="bg-gray-200 dark:bg-blue rounded-lg p-1.5 absolute top-0 bottom-0">
                <a
                  href="javascript:void(0)"
                  className="image-select min-h-full flex flex-col w-28"
                >
                  <div className="h-24 w-24 img-container mx-auto flex items-center justify-center rounded-lg bg-blue dark:bg-blue-darkest overflow-hidden relative">
                    <div className="p-2 rounded-full ada-container">
                      <svg
                        width={21}
                        height={22}
                        viewBox="0 0 21 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19.3896 13.6921H1.21661"
                          stroke="white"
                          strokeWidth="2.27888"
                          strokeLinecap="round"
                        />{" "}
                        <path
                          d="M19.3896 9.92578H1.21661"
                          stroke="white"
                          strokeWidth="2.27888"
                          strokeLinecap="round"
                        />{" "}
                        <path
                          d="M17.4532 20.0592L11.2821 1.95533L9.7685 1.95533"
                          stroke="white"
                          strokeWidth="2.27888"
                          strokeLinecap="round"
                        />{" "}
                        <line
                          x1="1.13944"
                          y1="-1.13944"
                          x2="19.3263"
                          y2="-1.13944"
                          transform="matrix(0.322643 -0.946521 -0.97853 -0.206104 2.71387 20.5562)"
                          stroke="white"
                          strokeWidth="2.27888"
                          strokeLinecap="round"
                        />{" "}
                        <path
                          d="M3.24799 20.0592L9.41912 1.95533L10.9327 1.95533"
                          stroke="white"
                          strokeWidth="2.27888"
                          strokeLinecap="round"
                        />{" "}
                        <line
                          x1="1.13944"
                          y1="-1.13944"
                          x2="19.3263"
                          y2="-1.13944"
                          transform="matrix(-0.322643 -0.946521 0.97853 -0.206104 17.9883 20.5562)"
                          stroke="white"
                          strokeWidth="2.27888"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-grow flex flex-col justify-center">
                    <p className="text-base leading-tight text-center font-medium text-blue dark:text-gray-lightest w-full">
                      0
                    </p>
                    <p className="text-base leading-tight text-center font-medium text-blue dark:text-gray-lightest w-full">
                      ADA
                    </p>
                  </div>
                </a>
              </div>
              <div
                className="trade-nfts flex overflow-x-auto"
                style={{ marginRight: 0, marginLeft: 132 }}
              >
                <div className="flex w-full flex-nowrap ">
                  <div
                    className="w-full text-center font-light text-gray-400 pt-8"
                    style={{ height: 128 }}
                  >
                    Your trade partner hasnt selected any Native Assets.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default OpenTent;
