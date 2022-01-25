import React from "react";
import { Typography, Image, Rate } from "antd";
import {
  EnvironmentTwoTone,
  MailTwoTone,
  PhoneTwoTone,
  SettingTwoTone,
} from "@ant-design/icons";
import UnitedKingdomFlag from "../assets/images/united-kingdom.png";
import ArmeniaFlag from "../assets/images/armenia.png";
import RussiaFlag from "../assets/images/russia.png";
import YSUIcon from "../assets/images/ysu.jpeg";
import BuildernLogo from "../assets/images/buildern.png";
import UcraftLogo from "../assets/images/ucraft.png";

const { Title, Text, Link } = Typography;

export const SKILLS = [
  {
    title: (
      <>
        HTML, CSS,{" "}
        <Link href="https://getbootstrap.com/" target="_blank">
          Bootstrap,
        </Link>{" "}
        <Link href="https://mui.com/" target="_blank">
          Material-UI,
        </Link>{" "}
        <Link href="https://ant.design/" target="_blank">
          Ant Design
        </Link>
      </>
    ),
    icon: <SettingTwoTone />,
  },
  {
    title: (
      <>
        <Link href="https://javascript.info/" target="_blank">
          JavaScript,
        </Link>{" "}
        <Link href="https://www.typescriptlang.org/" target="_blank">
          TypeScript
        </Link>
      </>
    ),
    icon: <SettingTwoTone />,
  },
  {
    title: (
      <>
        <Link href="https://reactjs.org/" target="_blank">
          React.js
        </Link>
      </>
    ),
    icon: <SettingTwoTone />,
  },
  {
    title: (
      <>
        <Link href="https://nodejs.org/" target="_blank">
          Node.js,
        </Link>{" "}
        <Link href="https://www.apollographql.com/" target="_blank">
          ApolloGraphQL,
        </Link>{" "}
        <Link href="https://www.prisma.io/" target="_blank">
          PrismaORM,
        </Link>
      </>
    ),
    icon: <SettingTwoTone />,
  },
  {
    title: (
      <>
        <Link href="https://git-scm.com/" target="_blank">
          Git,
        </Link>{" "}
        <Link href="https://github.com/" target="_blank">
          GitHub,
        </Link>{" "}
        <Link href="https://bitbucket.org/" target="_blank">
          BitBucket,
        </Link>
      </>
    ),
    icon: <SettingTwoTone />,
  },
  {
    title: (
      <>
        <Link href="https://www.apple.com/macos" target="_blank">
          MacOS,
        </Link>{" "}
        <Link href="https://www.linux.org/" target="_blank">
          Linux,
        </Link>{" "}
        <Link href="https://www.microsoft.com/en-us/windows" target="_blank">
          Windows,
        </Link>
      </>
    ),
    icon: <SettingTwoTone />,
  },
];

export const EXPERIENCE = [
  {
    title: (
      <Title level={5}>
        <a href="https://buildern.com/" rel="noreferrer" target="_blank">
          Buildern
        </a>
      </Title>
    ),
    icon: (
      <Image
        style={{ borderRadius: 6 }}
        width={78}
        preview={false}
        src={BuildernLogo}
      />
    ),
    description: (
      <>
        <Text>Software Engineer</Text>
        <br />
        <Text type="secondary">11.2021 - present</Text>
      </>
    ),
  },
  {
    title: (
      <Title level={5}>
        <a href="https://ucraft.com/" rel="noreferrer" target="_blank">
          Ucraft
        </a>
      </Title>
    ),
    icon: (
      <Image
        style={{ borderRadius: 6 }}
        width={78}
        preview={false}
        src={UcraftLogo}
      />
    ),
    description: (
      <>
        <Text>React.js Developer Intern</Text>
        <br />
        <Text type="secondary">02.2021 - 05.2021</Text>
      </>
    ),
  },
];

export const EDUCATION = [
  {
    title: (
      <Title level={5}>
        <a href="https://www.ysu.am/" rel="noreferrer" target="_blank">
          Yerevan State University
        </a>
      </Title>
    ),
    icon: (
      <Image
        style={{ borderRadius: 6 }}
        width={78}
        preview={false}
        src={YSUIcon}
      />
    ),
    description: (
      <>
        <a
          href="http://ysu.am/education/en/Informatics-and-Applied-Mathematics"
          rel="noreferrer"
          target="_blank"
        >
          Faculty of Informatics and Applied Mathematics
        </a>
        <br />
        <Text type="secondary">2016 - present</Text>
      </>
    ),
  },
];

export const LANGUAGES = [
  {
    title: "Armenian",
    icon: <Image width={32} preview={false} src={ArmeniaFlag} />,
    description: <Rate disabled defaultValue={6} count={6} />,
  },
  {
    title: "English",
    icon: <Image width={32} preview={false} src={UnitedKingdomFlag} />,
    description: <Rate disabled defaultValue={3} count={6} />,
  },
  {
    title: "Russian",
    icon: <Image width={32} preview={false} src={RussiaFlag} />,
    description: <Rate disabled defaultValue={4} count={6} />,
  },
];

export const CONTACT = [
  {
    title: (
      <Link href="https://goo.gl/maps/SBsCorGETQiJ2uNu7" target="_blank">
        Yerevan, Armenia
      </Link>
    ),
    icon: <EnvironmentTwoTone />,
  },
  {
    title: (
      <Link href="mailto: kyutneryan803@gmail.com" target="_blank">
        kyutneryan803@gmail.com
      </Link>
    ),
    icon: <MailTwoTone />,
  },
  {
    title: <Link href="tel:+37493906111">+374 93 906 111</Link>,
    icon: <PhoneTwoTone />,
  },
];
