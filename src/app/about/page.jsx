"use client";
import Brain from "../../components/Brain";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const AboutPage = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  // const isSkillRefInView = useInView(skillRef, {once:true});
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });


  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex dark:bg-gray-900 dark:text-white" ref={containerRef}>
        
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-10 justify-center">
            {/* BIOGRAPHY IMAGE */}
            <Image
              src="/ali.JPG"
              alt="pic"
              width={112}
              height={112}
              className="w-28 h-28 rounded-full object-cover"
            />
            {/* BIOGRAPHY TITLE */}
<h1 className="font-bold text-2xl dark:text-gray-100">BIOGRAPHY</h1>
{/* BIOGRAPHY DESC */}
<p className="text-lg dark:text-gray-300">
  Hello! I'm Ali, a passionate and dedicated front-end developer with a strong background in JavaScript, React, and Next.js. My journey in the tech world began at a young age, and over the years, I've honed my skills through various projects and collaborations.
  <br /><br />
  My recent endeavors include creating user-friendly web applications, optimizing user experiences, and continually learning new technologies to stay ahead in this fast-paced industry. I believe in the power of collaboration and communication to bring innovative solutions to life.
</p>
{/* BIOGRAPHY QUOTE */}

<div>
<span className="italic dark:text-gray-400">
  "I dont stop when I am tired, I stop when I am done."
</span>

            {/* BIOGRAPHY SIGN SVG*/}
            <div className="flex justify-end">
            <svg width="74" height="96" viewBox="0 0 574 596" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.99999 237C4.99999 299.343 11.2052 359.848 27.9444 420.056C36.2296 449.855 45.8011 489.192 84 488.556C100.861 488.275 115.579 477.057 127.444 466.111C148.412 446.769 160.778 422.355 164.222 394.111C171.896 331.187 152.484 270.65 115 220.444C99.7048 199.958 81.506 177.771 55.5 171.167C37.0744 166.487 17.149 172.534 8.22222 190C2.90863 200.396 1.99999 210.059 1.99999 221.5C1.99999 240.168 1.35627 258.283 7.99999 276" stroke="black" stroke-width="3" stroke-linecap="round"/>
              <path d="M155 294C155 309.125 151.631 328.397 158 342.5C163.007 353.588 166.272 366.064 172.5 376.444C176.892 383.764 186.181 391.957 194.056 395.5C203.391 399.701 213.517 401.46 223.778 399.778C226.26 399.371 229.945 397.081 230 394.333C230.327 377.992 230.733 361.239 228.778 345C225.63 318.851 217.745 293.613 213 267.778C212.799 266.681 209.622 254.776 209.222 257.444C208.366 263.151 211.559 270.688 213.278 275.889C217.425 288.438 222.945 300.507 227.556 312.889C231.805 324.3 232.809 339.174 244.056 345.5C252.65 350.334 260.912 349.233 268.889 343.5C280.724 334.993 282 326.146 282 311.833C282 292.009 281.949 271.93 276.556 252.667C275.061 247.33 273.386 242.139 271.222 237C270.943 236.336 269.522 231.676 270.222 234.667C273.891 250.343 280.171 265.952 285 281.333C288.416 292.214 292.273 302.769 297.778 312.778C300.148 317.087 302.054 323.178 306 326.222C314.935 333.115 326.442 332.71 335 325.222C341.467 319.563 347.206 310.037 347.889 301.333C348.909 288.331 348.978 273.644 345.889 260.944C342.53 247.138 337.44 233.135 331.5 220.222C329.48 215.831 326.259 211.883 324.5 207.389C322.95 203.428 320.216 199.728 319.056 195.667C316.837 187.901 326.171 210.172 329.444 217.556C336.989 234.574 343.956 256.956 357.5 270.5C364.211 277.211 370.458 282.115 379.778 284.778C389.229 287.478 391.368 260.916 391.778 256C393.83 231.379 388.489 207.568 379 185C376.145 178.209 372.456 171.024 368.222 165C366.851 163.049 367.293 161.007 366.222 159C362.012 151.106 372.734 175.722 377.056 183.556C380.418 189.65 382.314 195.942 384.5 202.5C385.741 206.224 385.938 211.008 387.5 214.444C389.701 219.286 391.502 225.509 392.944 230.556C393.346 231.961 394.584 233.251 395.556 234.5C396.956 236.3 396.616 237.612 397.5 239.556C399.089 243.052 400.894 248.654 405.222 249C408.342 249.25 413.164 251.517 416 252.778C422.264 255.562 423.192 247.404 428 245" stroke="black" stroke-width="3" stroke-linecap="round"/>
              <path d="M428 245C429.797 227.025 438.701 208.871 444.444 191.889C451.955 169.683 453.861 147.914 455.222 124.778C457.105 92.7753 452.901 62.2369 438 33.5C434.461 26.6744 429.745 20.4453 424.944 14.4444C420.269 8.60066 415.264 7.13205 409 4C407.405 3.20256 398.126 -0.305588 398 3.22222C397.337 21.7952 398.57 40.226 404.556 57.9444C412.515 81.5042 423.488 104.211 434.056 126.667C449.254 158.962 463.084 191.649 475.611 225.056C486.813 254.927 503.14 282.486 516.444 311.389C521.916 323.276 526.407 336.848 533.222 348C535.713 352.075 539.488 363.389 544 365.778C546.319 367.006 543.007 356.597 542.944 356.444C539.794 348.83 536.809 341.28 534 333.556C532.736 330.079 532.487 330.757 530 332" stroke="black" stroke-width="3" stroke-linecap="round"/>
              <path d="M455 171C455 155.403 454.826 129.313 467.556 118.111C477.68 109.202 493.615 107 506.5 107C512.376 107 518.589 106.433 524.222 108.444C532.652 111.455 541.51 117.085 548.778 122.222C560.717 130.662 568.963 143.705 570.778 158.222C571.866 166.93 573.656 177.149 569.944 185.5C564.827 197.015 558.803 207.742 549.5 216.444C540.54 224.826 529.088 231.439 519 238.444C507.095 246.712 495.097 254.509 483.389 263.111C463.778 277.519 446.108 294.209 427 309.222C412.852 320.339 397.528 330.087 383 340.778C370.026 350.324 354.728 357.291 340.889 365.556C312.14 382.725 284.756 402.599 259.278 424.389C244.86 436.72 224.941 456.642 230.667 478.111C236.026 498.21 255.025 498.438 272.444 498C294.959 497.434 318.278 490.467 337 477.778C344.818 472.479 354.673 466.865 364 465" stroke="black" stroke-width="3" stroke-linecap="round"/>
              <path d="M82 539C93.5917 530.083 109.486 522.547 122.778 516.667C132.573 512.333 142.807 508.914 152.778 505C157.436 503.171 163.212 502.249 167.444 499.556C169.814 498.048 184.697 491.236 183 496.222C175.757 517.497 176.027 542.704 174 564.889C173.26 572.989 172.04 581.023 171.222 589.111C171.118 590.144 169.923 595.566 172.222 593.778C196.766 574.688 218.742 552.74 244.667 535.333C256.888 527.127 269.831 515.723 284 511" stroke="black" stroke-width="3" stroke-linecap="round"/>
              <path d="M251 135C271.891 127.539 288.48 114.759 306.333 101.667C313.251 96.5937 322.341 91.2597 330.444 88.9444C334.352 87.8279 337.539 82.9558 335.778 90C332.328 103.799 332.522 118.649 328.778 132.222C327.538 136.717 327.219 141.29 326.5 145.889C325.728 150.83 323.752 150.771 327.278 147.833C343.655 134.185 362.846 123.953 378.556 109.5C383.852 104.627 391.268 98 399 98" stroke="black" stroke-width="3" stroke-linecap="round"/>
              <path d="M53 231C53 261.407 53 291.815 53 322.222C53 341.363 55.8099 359.523 58.4444 378.444C59.8013 388.189 64 399.294 64 409" stroke="black" stroke-width="3" stroke-linecap="round"/>
              <path d="M56 233C56.5999 243.798 62.4858 255.325 66 265.389C71.8197 282.054 80.9201 297.61 90.4444 312.389C94.861 319.242 100.752 325.257 104 332.778C104.791 334.61 105.706 336.007 107.444 337C107.88 337.249 108.001 337.565 108.222 338C114.302 349.926 120.082 361.994 126 374" stroke="black" stroke-width="3" stroke-linecap="round"/>
              <path d="M92 321C83.5196 321 74.9733 320.723 66.5 321.056C64.6458 321.128 57.8136 320.79 56.2222 322.222C55.8555 322.552 56 325.422 56 324" stroke="black" stroke-width="3" stroke-linecap="round"/>
            </svg>

            </div>
            
            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
            </div>
          </div>
          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl dark:text-gray-100"
            >
              SKILLS
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-transparent hover:text-black hover:ring-1 hover:ring-black dark:bg-white dark:text-black dark:hover:text-white dark:hover:bg-transparent dark:hover:ring-white">
                JavaScript
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-transparent hover:text-black hover:ring-1 dark:bg-white dark:text-black dark:hover:text-white dark:hover:bg-transparent dark:hover:ring-white hover:ring-black">
                TypeScript
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-transparent hover:text-black hover:ring-1 dark:bg-white dark:text-black dark:hover:text-white dark:hover:bg-transparent dark:hover:ring-white hover:ring-black">
                React.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-transparent hover:text-black hover:ring-1 dark:bg-white dark:text-black dark:hover:text-white dark:hover:bg-transparent dark:hover:ring-white hover:ring-black">
                Next.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-transparent hover:text-black hover:ring-1 dark:bg-white dark:text-black dark:hover:text-white dark:hover:bg-transparent dark:hover:ring-white hover:ring-black">
                SCSS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-transparent hover:text-black hover:ring-1 dark:bg-white dark:text-black dark:hover:text-white dark:hover:bg-transparent dark:hover:ring-white hover:ring-black">
                Tailwind CSS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-transparent hover:text-black hover:ring-1 dark:bg-white dark:text-black dark:hover:text-white dark:hover:bg-transparent dark:hover:ring-white hover:ring-black">
                MongoDB
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-transparent hover:text-black hover:ring-1 dark:bg-white dark:text-black dark:hover:text-white dark:hover:bg-transparent dark:hover:ring-white hover:ring-black">
                PostgreSQL
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-transparent hover:text-black hover:ring-1 dark:bg-white dark:text-black dark:hover:text-white dark:hover:bg-transparent dark:hover:ring-white hover:ring-black">
                Node.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-transparent hover:text-black hover:ring-1 dark:bg-white dark:text-black dark:hover:text-white dark:hover:bg-transparent dark:hover:ring-white hover:ring-black">
                Nest.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-transparent hover:text-black hover:ring-1 dark:bg-white dark:text-black dark:hover:text-white dark:hover:bg-transparent dark:hover:ring-white hover:ring-black">
                Express.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-transparent hover:text-black hover:ring-1 dark:bg-white dark:text-black dark:hover:text-white dark:hover:bg-transparent dark:hover:ring-white hover:ring-black">
                Spring Boot
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-transparent hover:text-black hover:ring-1 dark:bg-white dark:text-black dark:hover:text-white dark:hover:bg-transparent dark:hover:ring-white hover:ring-black">
                GraphQL
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-transparent hover:text-black hover:ring-1 dark:bg-white dark:text-black dark:hover:text-white dark:hover:bg-transparent dark:hover:ring-white hover:ring-black">
                Apollo
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-transparent hover:text-black hover:ring-1 dark:bg-white dark:text-black dark:hover:text-white dark:hover:bg-transparent dark:hover:ring-white hover:ring-black">
                Redux
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-transparent hover:text-black hover:ring-1 dark:bg-white dark:text-black dark:hover:text-white dark:hover:bg-transparent dark:hover:ring-white hover:ring-black">
                Framer Motion
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-transparent hover:text-black hover:ring-1 dark:bg-white dark:text-black dark:hover:text-white dark:hover:bg-transparent dark:hover:ring-white hover:ring-black">
                Three.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-transparent hover:text-black hover:ring-1 dark:bg-white dark:text-black dark:hover:text-white dark:hover:bg-transparent dark:hover:ring-white hover:ring-black">
                WebGL
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-transparent hover:text-black hover:ring-1 dark:bg-white dark:text-black dark:hover:text-white dark:hover:bg-transparent dark:hover:ring-white hover:ring-black">
                Webpack
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-transparent hover:text-black hover:ring-1 dark:bg-white dark:text-black dark:hover:text-white dark:hover:bg-transparent dark:hover:ring-white hover:ring-black">
                Vite
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-transparent hover:text-black hover:ring-1 dark:bg-white dark:text-black dark:hover:text-white dark:hover:bg-transparent dark:hover:ring-white hover:ring-black">
                Docker
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-transparent hover:text-black hover:ring-1 dark:bg-white dark:text-black dark:hover:text-white dark:hover:bg-transparent dark:hover:ring-white hover:ring-black">
                AWS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-transparent hover:text-black hover:ring-1 dark:bg-white dark:text-black dark:hover:text-white dark:hover:bg-transparent dark:hover:ring-white hover:ring-black">
                Firebase
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-transparent hover:text-black hover:ring-1 dark:bg-white dark:text-black dark:hover:text-white dark:hover:bg-transparent dark:hover:ring-white hover:ring-black">
                Git
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-transparent hover:text-black hover:ring-1 dark:bg-white dark:text-black dark:hover:text-white dark:hover:bg-transparent dark:hover:ring-white hover:ring-black">
                Figma
              </div>
            </motion.div>
            {/* SKILL SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={experienceRef}
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl dark:text-gray-100"
            >
              EXPERIENCE
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className=""
            >
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-80">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg dark:text-black">
                    Web Developer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                  Developed an informational website to enhance the
                      company's online presence.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    June - Septemper 2023
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit dark:text-black">
                    Cifra Energy
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-80">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg dark:text-black">
                    FrontEnd Developer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    Collaborated with a team of experienced front-end devs to build a high-impact project.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    January - May 2024{" "}
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit dark:text-black">
                    Oy-Gul.uz
                  </div>
                </div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;