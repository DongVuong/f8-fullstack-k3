import Image from "next/image";
import React from "react";
import "./book.scss";
export default function Book() {
  return (
    <section
      className="h-screen container mx-auto flex flex-col items-center justify-end gap-y-4 pb-[50px]"
      id="book"
    >
      <h2 className=" heading text-4xl font-bold text-100 flex gap-x-6 justify-center">
        <span>T</span>
        <span>Ì</span>
        <span>M</span>
        <span className="space"></span>
        <span>Ư</span>
        <span>U</span>
        <span className="space"></span>
        <span>Đ</span>
        <span>Ã</span>
        <span>I</span>
      </h2>

      <div className="flex flex-row justify-center items-center gap-x-10">
        <div className="section-image">
          <Image
            src={
              "https://code-fullstack-exercise49.vercel.app/images/book-img.svg"
            }
            alt="book"
            width={500}
            height={500}
          />
        </div>
        <div className="section-formBox bg-slate-100 shadow-[0_0_10px_10px_rgba(0,0,0,0.2)] rounded-md">
          <form className="p-5 shadow-[0_0px_15px_1px_rgba(0,0,0,0.1)] rounded-md flex flex-col gap-y-4 text-md">
            <div className="item">
              <label htmlFor="email" className=" block font-bold">
                Hãy Liên Hệ Với Tôi Bằng :
              </label>
              <input
                type="text"
                name="email"
                id="email"
                className="w-[500px] px-2 py-1.5 border-1 border-[#ddd] mt-2"
                placeholder="Email hoặc Số điện thoại"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label htmlFor="maps" className=" block font-bold">
                Tôi Muốn Đến :
              </label>
              <select>
                <option value="American Samoa">American Samoa</option>
                <option value="Angola">Angola</option>
                <option value="Argentina">Argentina</option>
                <option value="Armenia">Armenia</option>
                <option value="Australia">Australia</option>
                <option value="Austria">Austria</option>
                <option value="Azerbaijan">Azerbaijan</option>
                <option value="Bahamas">Bahamas</option>
                <option value="Barbados">Barbados</option>
                <option value="Belarus">Belarus</option>
                <option value="Benin">Benin</option>
                <option value="Bermuda">Bermuda</option>
                <option value="Bhutan">Bhutan</option>
                <option value="Bolivia">Bolivia</option>
                <option value="Bouvet Island">Bouvet Island</option>
                <option value="Brazil">Brazil</option>
                <option value="Cambodia">Cambodia</option>
                <option value="Cameroon">Cameroon</option>
                <option value="Canada">Canada</option>
                <option value="Cayman Islands">Cayman Islands</option>
                <option value="Central African Republic">
                  Central African Republic
                </option>
                <option value="Chad">Chad</option>
                <option value="Chile">Chile</option>
                <option value="China">China</option>
                <option value="Christmas Island">Christmas Island</option>
                <option value="Cocos Islands">Cocos (Keeling) Islands</option>
                <option value="Colombia">Colombia</option>
                <option value="Comoros">Comoros</option>
                <option value="Congo">Congo</option>
                <option value="Cook Islands">Cook Islands</option>
                <option value="Costa Rica">Costa Rica</option>
                <option value="Cuba">Cuba</option>
                <option value="Cyprus">Cyprus</option>
                <option value="Denmark">Denmark</option>
                <option value="Dominica">Dominica</option>
                <option value="Dominican Republic">Dominican Republic</option>
                <option value="East Timor">East Timor</option>
                <option value="Ecuador">Ecuador</option>
                <option value="Egypt">Egypt</option>
                <option value="Ethiopia">Ethiopia</option>
                <option value="Faroe Islands">Faroe Islands</option>
                <option value="France">France</option>
                <option value="France Metropolitan">
                  France, Metropolitan
                </option>
                <option value="French Guiana">French Guiana</option>
                <option value="French Polynesia">French Polynesia</option>
                <option value="Gambia">Gambia</option>
                <option value="Georgia">Georgia</option>
                <option value="Germany">Germany</option>
                <option value="Greenland">Greenland</option>
                <option value="Guam">Guam</option>
                <option value="Guyana">Guyana</option>
                <option value="Haiti">Haiti</option>
                <option value="Holy See">Holy See (Vatican City State)</option>
                <option value="Hong Kong">Hong Kong</option>
                <option value="Hungary">Hungary</option>
                <option value="Iceland">Iceland</option>
                <option value="India">India</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Iran">Iran (Islamic Republic of)</option>
                <option value="Iraq">Iraq</option>
                <option value="Ireland">Ireland</option>
                <option value="Israel">Israel</option>
                <option value="Italy">Italy</option>
                <option value="Jamaica">Jamaica</option>
                <option value="Japan">Japan</option>
                <option value="Jordan">Jordan</option>
                <option value="Kazakhstan">Kazakhstan</option>
                <option value="Kenya">Kenya</option>
                <option value="Kiribati">Kiribati</option>
                <option value="Democratic People Republic of Korea">
                  Korea, Democratic People&apos;s Republic of
                </option>
                <option value="Kuwait">Kuwait</option>
                <option value="Lao">
                  Lao People&apos;s Democratic Republic
                </option>
                <option value="Liberia">Liberia</option>
                <option value="Lithuania">Lithuania</option>
                <option value="Macau">Macau</option>
                <option value="Malawi">Malawi</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Mali">Mali</option>
                <option value="Malta">Malta</option>
                <option value="Marshall Islands">Marshall Islands</option>
                <option value="Mayotte">Mayotte</option>
                <option value="Mexico">Mexico</option>
                <option value="Monaco">Monaco</option>
                <option value="Morocco">Morocco</option>
                <option value="Mozambique">Mozambique</option>
                <option value="Myanmar">Myanmar</option>
                <option value="Namibia">Namibia</option>
                <option value="Nauru">Nauru</option>
                <option value="Nepal">Nepal</option>
                <option value="Netherlands">Netherlands</option>
                <option value="New Caledonia">New Caledonia</option>
                <option value="New Zealand">New Zealand</option>
                <option value="Niger">Niger</option>
                <option value="Nigeria">Nigeria</option>
                <option value="Niue">Niue</option>
                <option value="Norfolk Island">Norfolk Island</option>
                <option value="Norway">Norway</option>
                <option value="Oman">Oman</option>
                <option value="Pakistan">Pakistan</option>
                <option value="Palau">Palau</option>
                <option value="Panama">Panama</option>
                <option value="Peru">Peru</option>
                <option value="Philippines">Philippines</option>
                <option value="Puerto Rico">Puerto Rico</option>
                <option value="Qatar">Qatar</option>
                <option value="Reunion">Reunion</option>
                <option value="Romania">Romania</option>
                <option value="Russia">Russian Federation</option>
                <option value="Rwanda">Rwanda</option>
                <option value="Saint LUCIA">Saint LUCIA</option>
                <option value="Samoa">Samoa</option>
                <option value="San Marino">San Marino</option>
                <option value="Saudi Arabia">Saudi Arabia</option>
                <option value="Singapore">Singapore</option>
                <option value="Slovakia">Slovakia (Slovak Republic)</option>
                <option value="Slovenia">Slovenia</option>
                <option value="Solomon Islands">Solomon Islands</option>
                <option value="South Africa">South Africa</option>
                <option value="Span">Spain</option>
                <option value="SriLanka">Sri Lanka</option>
                <option value="Sudan">Sudan</option>
                <option value="Suriname">Suriname</option>
                <option value="Syria">Syrian Arab Republic</option>
                <option value="Taiwan">Taiwan, Province of China</option>
                <option value="Thailand">Thailand</option>
                <option value="Togo">Togo</option>
                <option value="Tokelau">Tokelau</option>
                <option value="Tonga">Tonga</option>
                <option value="Tunisia">Tunisia</option>
                <option value="Turkey">Turkey</option>
                <option value="Uganda">Uganda</option>
                <option value="Ukraine">Ukraine</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="United States">United States</option>
                <option value="Uruguay">Uruguay</option>
                <option value="Uzbekistan">Uzbekistan</option>
                <option value="Vanuatu">Vanuatu</option>
                <option value="Venezuela">Venezuela</option>
                <option defaultValue="Vietnam">Viet Nam</option>
                <option value="Yemen">Yemen</option>
                <option value="Serbia">Serbia</option>
                <option value="Zambia">Zambia</option>
                <option value="Zimbabwe">Zimbabwe</option>
              </select>
              <input
                type="text"
                name="maps"
                id="maps"
                className="w-[500px] px-2 py-1.5 border-1 border-[#ddd]"
                placeholder="Địa điểm chính xác"
              />
            </div>
            <div className="item">
              <label htmlFor="number" className=" block font-bold">
                Chúng Tôi Có :
              </label>
              <input
                type="number"
                name="number"
                id="number"
                min={1}
                className="w-[500px] px-2 py-1.5 border-1 border-[#ddd] mt-2"
                placeholder="Số người"
              />
            </div>
            <div className="item">
              <label htmlFor="start" className=" block font-bold">
                Bắt Đầu Từ :
              </label>
              <input
                type="date"
                name="start"
                id="start"
                className="w-[500px] px-2 py-1.5 border-1 border-[#ddd] mt-2"
                placeholder="Bắt đầu từ"
              />
            </div>
            <div className="item">
              <label htmlFor="end" className=" block font-bold">
                Kết Thúc Vào :
              </label>
              <input
                type="date"
                name="end"
                id="end"
                className="w-[500px] px-2 py-1.5 border-1 border-[#ddd] mt-2"
                placeholder="Bắt đầu từ"
              />
            </div>
            <button type="submit" className=" bg-orange-400 py-1.5 rounded-md">
              Tìm Ngay
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
