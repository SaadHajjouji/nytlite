import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import getTitles from "../../helpers/dataCenter";
import Head from "next/head";
import CategoryPageLayout from "../../components/layout/categorypagelayout/CategoryPageLayout";
import CategoryPageMain from "../../components/categoryPage/CategoryPageMain";
import Spinner from "../../helpers/Spinner";
export default function Category(props) {
  const categoryData = props.data.results;
  const category = props.category;
  const [showSideNavDesktop, setshowSideNavDesktop] = useState(false);
  const [sections, setSections] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchTitles();
  }, []);
  const fetchTitles = async () => {
    const data = await getTitles();
    setSections(data);
  };
  return (
    <Fragment>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {loading ? (
        <Spinner/>
      ) : (
        <div onClickCapture={() => setshowSideNavDesktop(false)}>
          <CategoryPageLayout
            showSideNavDesktop={showSideNavDesktop}
            setshowSideNavDesktop={setshowSideNavDesktop}
            category={category}
            sections={sections}
            setLoading={setLoading}
          >
            <CategoryPageMain categoryData={categoryData} category={category} />
          </CategoryPageLayout>
        </div>
      )}
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const category = context.params.category;
  const baseUrl = `https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=EhgvtA3WE0sRHZeL6sQ8LPFZtn2CtGFz`;
  let data = await axios.get(baseUrl);
  return {
    props: {
      data: data.data,
      category: category,
    },
    revalidate: 60000,
  };
}
export async function getStaticPaths() {
  const sections = await getTitles();
  const paths = sections.map((section) => ({ params: { category: section } }));
  return {
    paths: paths,
    fallback: "blocking",
  };
}
