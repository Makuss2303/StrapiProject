import MainVisual from "@/components/organisms/mainVisual"
import TopAbout from "@/components/organisms/topAbout"
import Contact from "@/components/organisms/headlessContact"
import Issues from "@/components/organisms/issues"
import Solution from "@/components/organisms/solution"
import WorkingFlow from "@/components/organisms/workingFlow"
import Advantages from "@/components/organisms/advantages"
import HeadlessSupport from "@/components/organisms/headlessSupport"
import CmsExample from "@/components/organisms/cmsExample"
import Features from "@/components/organisms/features"
import Development from "@/components/organisms/development"
import ProductionFlow from "@/components/organisms/productionFlow"
import Article from "@/components/organisms/article"
import Faq from "@/components/organisms/faq"
import Form from "@/components/organisms/form"
import axios from "@/utils/axios"

export const revalidate = 1 //make requests will be subject to revalidation after a certain period

async function getDataMainVisual() {
  let data = {}
  const res = await axios
    .get("main-visual", {params: {populate:'*'}})
    .then((response) => {
      if (typeof response.data === "object" && response.data !== null) {
        data = response.data.data?.attributes
      }
    })
    .catch(function (error) {
      console.log(error)
    })
  return data
}

async function getDataCTA() {
  let data = {}
  const res = await axios
  .get("cta-banner", {params: {populate:'*'}})
    .then((response) => {
      if (typeof response.data === "object" && response.data !== null) {
        data = response.data.data?.attributes
      }
    })
    .catch(function (error) {
      console.log(error)
    })
  return data
}

type ImageProps = {
  data: {
    attributes: {
      url: string
    }
  },
}

type ButtonProps = {
  linkText: string
  linkURL: string
  targetBlank: boolean
}

type MainVisualProps = {
  mainImage: ImageProps
  mainTitle: string
  subTitle: string
  text: string
  button: ButtonProps
  outlineImage: ImageProps
  outlineHeading: string
  outlineText: string
}

type CTAProps = {
  title: string
  text: string
  button: ButtonProps
  ctaMainVisual: boolean
  ctaIntro: boolean
  ctaStructureMerit: boolean
  ctaFeature: boolean
  ctaFaq: boolean
}

export default async function Home() {
  const data = await getDataMainVisual() as MainVisualProps
  const dataCTA = await getDataCTA() as CTAProps
  return (
    <>
      <MainVisual data={data} />
      <TopAbout data={data} />
      {dataCTA?.ctaMainVisual && (<Contact type="background1" data={dataCTA} />)}
      <Issues />
      <Solution />
      {dataCTA?.ctaIntro && (<Contact type="background2" data={dataCTA} />)}
      <WorkingFlow />
      <Advantages />
      {dataCTA?.ctaStructureMerit && (<Contact type="background1" data={dataCTA} />)}
      <HeadlessSupport />
      <CmsExample />
      <Features />
      {dataCTA?.ctaFeature && (<Contact type="background2" data={dataCTA} />)}
      <Development />
      <ProductionFlow />
      <Contact type="background1" data={dataCTA} />
      <Article />
      <Faq />
      {dataCTA?.ctaFaq && (<Contact type="background3" data={dataCTA} />)}
      <Form />
    </>
  )
}
