import axios from "axios"
import toast from "react-hot-toast"

export async function uploadImages(createProductInfo, setFieldValue, productImage, thumbnail ) {

  async function uploadThumbnail(file) {
    console.log(file)
    try {
      await fetch(`http://localhost:3001/upload/singleImage/`, { method: 'POST', body: file, mode: 'no-cors' }).then((e) => {
        setFieldValue('thumbnailUploadState', false)
        console.log('upload thumnail', e)
      }).catch((err) => {
        console.log('error', err)
        setFieldValue('thumbnailUploadState', false)
      })
    } catch (error) {
      console.log(error);
      setFieldValue('thumbnailUploadState', false)
    }
  }

  async function uploadProductImages(file) {

    //  await fetch(`http://localhost:3001/upload/multipleImage/`, { method: 'POST', body: file, mode: 'no-cors', headers:{'Access-Control-Allow-Origin':'*'} }).then((e) => e)
    await axios.post(`http://localhost:3001/upload/multipleImage/`, file, {
      headers: { 'Access-Control-Allow-Origin': 'http://localhost:3001' }, onUploadProgress: (p) => {
        const convertToPercentage = (p.loaded / p.total) * 100
        setFieldValue('productImageUploadState', convertToPercentage)
        if (convertToPercentage === 100) return setFieldValue('productImageUploadState', 0)
        // console.log(convertToPercentage)
        // console.log(p)
      }
    })
  }
  if (productImage) {
    const productImagesFormData = new FormData()
    let index = 0
    Array.from(productImage).map((image: File) => {
      const format = image.name.slice(thumbnail.name.indexOf('.'))
      productImagesFormData.append('images', image, createProductInfo.imagesUrl[index] + format)
      ++index
    })
    await uploadProductImages(productImagesFormData)
  }
  if (thumbnail) {
    const thumbNailStateformData = new FormData();
    const format = thumbnail.name.slice(thumbnail.name.indexOf('.'))
    thumbNailStateformData.append("image", thumbnail, createProductInfo.thumbnailUrl + format);
    // console.log('thumbNailStateformData',thumbNailStateformData.get('thumbnail'))
    await uploadThumbnail(thumbNailStateformData)

  } else {
    return toast.success('لطفا تصویر محصول را بارگذاری کنید')
  }
}