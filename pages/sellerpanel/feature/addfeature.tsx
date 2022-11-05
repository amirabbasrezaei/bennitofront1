import SellerPanelLayout from '../../../components/layout/SellerPanelLayout'
import AddFeature from '../../../components/SellerPanel/Products/Feature.tsx/AddFeature'

type Props = {}

export default function addfeature({}: Props) {

  return (
    <SellerPanelLayout title="ویژگی" navbar={false} mobilemenu={true} >  
      <AddFeature />
    </SellerPanelLayout>)
}


export function getServerSideProps() {
  return {
    props : {}
  }
}