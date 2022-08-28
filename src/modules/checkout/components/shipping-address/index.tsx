import { CheckoutFormValues } from "@lib/context/checkout-context"
import { emailRegex } from "@lib/util/regex"
import ConnectForm from "@modules/common/components/connect-form"
import Input from "@modules/common/components/input"
import { useMeCustomer } from "medusa-react"
import AddressSelect from "../address-select"
import CountrySelect from "../country-select"

const ShippingAddress = () => {
  const { customer } = useMeCustomer()
  return (
    <div>
      {customer && (customer.shipping_addresses?.length || 0) > 0 && (
        <div className="mb-6 flex flex-col gap-y-4 bg-amber-100 p-4">
          <p className="text-small-regular">
            {`Hi ${customer.first_name}, bạn có muốn sử dụng một trong những địa chỉ đã lưu của bạn?`}
          </p>
          <AddressSelect addresses={customer.shipping_addresses} />
        </div>
      )}
      <ConnectForm<CheckoutFormValues>>
        {({ register, formState: { errors, touchedFields } }) => (
          <div className="grid grid-cols-1 gap-y-2">
            <Input
              label="Email"
              {...register("email", {
                required: "Xin hãy nhập Email",
                pattern: emailRegex,
              })}
              autoComplete="email"
              errors={errors}
              touched={touchedFields}
            />
            <div className="grid grid-cols-2 gap-x-2">
            <Input
                label="Họ"
                {...register("shipping_address.last_name", {
                  required: "Xin hãy nhập họ",
                })}
                autoComplete="family-name"
                errors={errors}
                touched={touchedFields}
              />
              <Input
                label="Tên và chữ lót"
                {...register("shipping_address.first_name", {
                  required: "Xin hãy nhập tên",
                })}
                autoComplete="given-name"
                errors={errors}
                touched={touchedFields}
              />
              
            </div>
            <Input
              label="Công ty"
              {...register("shipping_address.company")}
              autoComplete="organization"
              errors={errors}
              touched={touchedFields}
            />
            <Input
              label="Đia chỉ"
              {...register("shipping_address.address_1", {
                required: "Xin nhập địa chỉ",
              })}
              autoComplete="address-line1"
              errors={errors}
              touched={touchedFields}
            />
            <Input
              label="Tên tòa nhà, khu..."
              {...register("shipping_address.address_2")}
              autoComplete="address-line2"
              errors={errors}
              touched={touchedFields}
            />
            <Input
              label="Thành phố"
              {...register("shipping_address.city", {
                required: "Xin nhập thành phố",
              })}
              autoComplete="address-level2"
              errors={errors}
              touched={touchedFields}
            />
            <CountrySelect
              {...register("shipping_address.country_code", {
                required: "Xin nhập đất nước",
              })}
              autoComplete="country"
              errors={errors}
              touched={touchedFields}
            />
            <Input
              label="Số điện thoại"
              {...register("shipping_address.phone")}
              autoComplete="tel"
              errors={errors}
              touched={touchedFields}
            />
          </div>
        )}
      </ConnectForm>
    </div>
  )
}

export default ShippingAddress
