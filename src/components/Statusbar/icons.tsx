import React from 'react';

type SVGAttributes = React.SVGProps<SVGSVGElement>;

export const ListModeIcon: React.FC<SVGAttributes> = (props) => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 13 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      width="13"
      height="13"
      fill="#F2F0F0"
      fillOpacity="0.05"
    />
    <path
      d="M11.5781 2.4375H4.16406C4.1082 2.4375 4.0625 2.4832 4.0625 2.53906V3.25C4.0625 3.30586 4.1082 3.35156 4.16406 3.35156H11.5781C11.634 3.35156 11.6797 3.30586 11.6797 3.25V2.53906C11.6797 2.4832 11.634 2.4375 11.5781 2.4375ZM11.5781 6.04297H4.16406C4.1082 6.04297 4.0625 6.08867 4.0625 6.14453V6.85547C4.0625 6.91133 4.1082 6.95703 4.16406 6.95703H11.5781C11.634 6.95703 11.6797 6.91133 11.6797 6.85547V6.14453C11.6797 6.08867 11.634 6.04297 11.5781 6.04297ZM11.5781 9.64844H4.16406C4.1082 9.64844 4.0625 9.69414 4.0625 9.75V10.4609C4.0625 10.5168 4.1082 10.5625 4.16406 10.5625H11.5781C11.634 10.5625 11.6797 10.5168 11.6797 10.4609V9.75C11.6797 9.69414 11.634 9.64844 11.5781 9.64844ZM1.32031 2.89453C1.32031 2.98789 1.3387 3.08034 1.37443 3.1666C1.41016 3.25285 1.46252 3.33122 1.52854 3.39724C1.59456 3.46326 1.67293 3.51562 1.75919 3.55135C1.84544 3.58708 1.93789 3.60547 2.03125 3.60547C2.12461 3.60547 2.21706 3.58708 2.30331 3.55135C2.38957 3.51562 2.46794 3.46326 2.53396 3.39724C2.59998 3.33122 2.65234 3.25285 2.68807 3.1666C2.7238 3.08034 2.74219 2.98789 2.74219 2.89453C2.74219 2.80117 2.7238 2.70872 2.68807 2.62247C2.65234 2.53621 2.59998 2.45784 2.53396 2.39182C2.46794 2.32581 2.38957 2.27344 2.30331 2.23771C2.21706 2.20198 2.12461 2.18359 2.03125 2.18359C1.93789 2.18359 1.84544 2.20198 1.75919 2.23771C1.67293 2.27344 1.59456 2.32581 1.52854 2.39182C1.46252 2.45784 1.41016 2.53621 1.37443 2.62247C1.3387 2.70872 1.32031 2.80117 1.32031 2.89453V2.89453ZM1.32031 6.5C1.32031 6.59336 1.3387 6.68581 1.37443 6.77206C1.41016 6.85832 1.46252 6.93669 1.52854 7.00271C1.59456 7.06873 1.67293 7.12109 1.75919 7.15682C1.84544 7.19255 1.93789 7.21094 2.03125 7.21094C2.12461 7.21094 2.21706 7.19255 2.30331 7.15682C2.38957 7.12109 2.46794 7.06873 2.53396 7.00271C2.59998 6.93669 2.65234 6.85832 2.68807 6.77206C2.7238 6.68581 2.74219 6.59336 2.74219 6.5C2.74219 6.40664 2.7238 6.31419 2.68807 6.22794C2.65234 6.14168 2.59998 6.06331 2.53396 5.99729C2.46794 5.93127 2.38957 5.87891 2.30331 5.84318C2.21706 5.80745 2.12461 5.78906 2.03125 5.78906C1.93789 5.78906 1.84544 5.80745 1.75919 5.84318C1.67293 5.87891 1.59456 5.93127 1.52854 5.99729C1.46252 6.06331 1.41016 6.14168 1.37443 6.22794C1.3387 6.31419 1.32031 6.40664 1.32031 6.5V6.5ZM1.32031 10.1055C1.32031 10.1988 1.3387 10.2913 1.37443 10.3775C1.41016 10.4638 1.46252 10.5422 1.52854 10.6082C1.59456 10.6742 1.67293 10.7266 1.75919 10.7623C1.84544 10.798 1.93789 10.8164 2.03125 10.8164C2.12461 10.8164 2.21706 10.798 2.30331 10.7623C2.38957 10.7266 2.46794 10.6742 2.53396 10.6082C2.59998 10.5422 2.65234 10.4638 2.68807 10.3775C2.7238 10.2913 2.74219 10.1988 2.74219 10.1055C2.74219 10.0121 2.7238 9.91966 2.68807 9.8334C2.65234 9.74715 2.59998 9.66878 2.53396 9.60276C2.46794 9.53674 2.38957 9.48438 2.30331 9.44865C2.21706 9.41292 2.12461 9.39453 2.03125 9.39453C1.93789 9.39453 1.84544 9.41292 1.75919 9.44865C1.67293 9.48438 1.59456 9.53674 1.52854 9.60276C1.46252 9.66878 1.41016 9.74715 1.37443 9.8334C1.3387 9.91966 1.32031 10.0121 1.32031 10.1055V10.1055Z"
      fill={props.fill || "#365272"} />
  </svg>
)

export const CardModeIcon: React.FC<SVGAttributes> = (props) => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 13 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5.80399 1.16211H1.39328C1.2656 1.16211 1.16113 1.26657 1.16113 1.39425V5.80497C1.16113 5.93265 1.2656 6.03711 1.39328 6.03711H5.80399C5.93167 6.03711 6.03613 5.93265 6.03613 5.80497V1.39425C6.03613 1.26657 5.93167 1.16211 5.80399 1.16211ZM5.04953 5.0505H2.14774V2.14872H5.04953V5.0505ZM11.6076 1.16211H7.19685C7.06917 1.16211 6.9647 1.26657 6.9647 1.39425V5.80497C6.9647 5.93265 7.06917 6.03711 7.19685 6.03711H11.6076C11.7352 6.03711 11.8397 5.93265 11.8397 5.80497V1.39425C11.8397 1.26657 11.7352 1.16211 11.6076 1.16211ZM10.8531 5.0505H7.95131V2.14872H10.8531V5.0505ZM5.80399 6.96568H1.39328C1.2656 6.96568 1.16113 7.07015 1.16113 7.19783V11.6085C1.16113 11.7362 1.2656 11.8407 1.39328 11.8407H5.80399C5.93167 11.8407 6.03613 11.7362 6.03613 11.6085V7.19783C6.03613 7.07015 5.93167 6.96568 5.80399 6.96568ZM5.04953 10.8541H2.14774V7.95229H5.04953V10.8541ZM11.6076 6.96568H7.19685C7.06917 6.96568 6.9647 7.07015 6.9647 7.19783V11.6085C6.9647 11.7362 7.06917 11.8407 7.19685 11.8407H11.6076C11.7352 11.8407 11.8397 11.7362 11.8397 11.6085V7.19783C11.8397 7.07015 11.7352 6.96568 11.6076 6.96568ZM10.8531 10.8541H7.95131V7.95229H10.8531V10.8541Z"
      fill={props.fill || "#365272"}
      fillOpacity="0.85"
    />
  </svg>

)