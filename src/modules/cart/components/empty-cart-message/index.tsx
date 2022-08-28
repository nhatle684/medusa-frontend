import UnderlineLink from "@modules/common/components/underline-link"

const EmptyCartMessage = () => {
  return (
    <div className="bg-amber-100 px-8 py-24 flex flex-col justify-center items-center text-center">
      <h1 className="text-2xl-semi">Giỏ hàng của bạn đang trống</h1>
      <p className="text-base-regular mt-4 mb-6 max-w-[32rem]">
        Bạn không có gì trong giỏ hàng cả. Hãy thay đổi nó bằng cách
        sử dụng đường dẫn bên dưới để xem sản phẩm.
      </p>
      <div>
        <UnderlineLink href="/store">Khám phá sản phẩm</UnderlineLink>
      </div>
    </div>
  )
}

export default EmptyCartMessage
