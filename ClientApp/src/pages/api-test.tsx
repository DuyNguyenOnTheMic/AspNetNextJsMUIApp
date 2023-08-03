// ** Next Imports
import { GetStaticProps, InferGetStaticPropsType } from 'next/types'

// ** Third Party Components
import axios from 'axios'

export const getStaticProps: GetStaticProps = async () => {
  const res = await axios.get(process.env.API_BASE_URL + '/api/students')
  const apiData = await res.data

  return { props: { apiData } }
}

export default function Page({ apiData }: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(apiData)

  return <>Bà nội cha ơi</>
}
