import Link from "next/link";

const NextPage = () => {
  return (
    <ul>
      <Link href="/">
        <a href="/">Go home</a>
      </Link>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  );
};

export default NextPage;
