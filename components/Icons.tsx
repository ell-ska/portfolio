import formatHexColor from '@/utils/formatHexColor'

const Logo = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      width='75'
      height='32'
      viewBox='0 0 75 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M40.1266 12.649C40.4934 12.667 40.8066 12.3542 40.859 12.0042C40.873 11.9529 40.8846 11.8991 40.8909 11.8439C41.0584 10.4581 41.029 9.06707 40.8347 7.68505C40.7401 7.00814 40.6021 6.33893 40.4116 5.68253C40.2314 5.06075 40.0359 4.3159 39.6652 3.78001C39.2945 3.24669 38.6363 2.7749 38.0011 2.62491C37.2342 2.44542 36.4814 2.739 35.8972 3.23002C34.9054 4.0659 34.3328 5.42997 34.0388 6.66328C33.8676 7.38121 33.7755 8.12222 33.7295 8.8581C33.6771 9.68757 33.7282 10.5158 33.7065 11.3452C33.7052 11.3978 33.7103 11.4465 33.7167 11.4939C33.7116 11.5273 33.7065 11.5606 33.7065 11.5939C33.7065 11.6363 33.7129 11.6773 33.7193 11.717C33.7129 11.758 33.7065 11.7978 33.7065 11.8427C33.7065 13.9195 33.6758 15.9977 33.7615 18.0733C33.8458 20.1348 34.0197 22.1899 34.2561 24.2385C34.3443 25.0013 34.3814 25.8077 34.5961 26.5487C34.8377 27.3795 35.3374 28.2897 36.0276 28.8179C36.884 29.4743 38.1736 29.6179 39.0798 28.9731C39.9119 28.3808 40.3426 27.3641 40.5689 26.3962C41.0597 24.2924 40.767 22.1194 40.9497 19.9873C40.9842 19.5861 40.5829 19.2412 40.2059 19.2412C39.7751 19.2412 39.4965 19.5835 39.462 19.9873C39.315 21.7014 39.4786 23.4283 39.2856 25.1411C39.2012 25.8847 39.0082 26.709 38.6171 27.3308C38.2247 27.9538 37.5141 28.0833 36.93 27.6449C36.6296 27.4205 36.4456 27.0705 36.2794 26.7321C36.2372 26.6462 36.1963 26.5577 36.1554 26.4705C36.1286 26.4128 36.103 26.3539 36.0762 26.2949C36.0736 26.2885 36.0685 26.2744 36.0621 26.259C36.0557 26.2411 36.0506 26.2231 36.0481 26.2154C36.0315 26.1552 36.0123 26.0949 35.9982 26.0334C35.9688 25.9129 35.9458 25.7911 35.9254 25.6693C35.9126 25.5911 35.8998 25.5129 35.8883 25.4359C35.8832 25.4 35.8781 25.3654 35.873 25.3295C35.8768 25.3616 35.8806 25.3872 35.873 25.3295C35.8717 25.3167 35.8691 25.3039 35.8678 25.2936C35.8103 24.8475 35.7605 24.4001 35.7094 23.9526C35.4908 22.0732 35.34 20.1861 35.2569 18.2951C35.17 16.3246 35.1879 14.3516 35.1917 12.3798C36.8367 12.467 38.4816 12.5657 40.1266 12.6478V12.649ZM35.3259 7.803C35.4972 6.73892 35.8154 5.67356 36.4647 4.79922C36.7038 4.47743 37.0399 4.10821 37.4579 4.06462C37.8042 4.02872 38.2695 4.3659 38.4305 4.60692C38.7181 5.03383 38.8523 5.64151 38.9916 6.13124C39.1552 6.70046 39.2792 7.28122 39.37 7.8671C39.5336 8.93887 39.5566 10.0376 39.4735 11.1209C38.0484 11.0465 36.6232 10.9645 35.1981 10.8888C35.2045 9.8568 35.1598 8.82734 35.3246 7.80172L35.3259 7.803Z'
        fill='#111827'
      />
      <path
        d='M47.6333 24.5041C46.7233 24.581 45.8081 24.5836 44.8981 24.5041C44.7 24.4862 44.5031 24.4669 44.3063 24.44C44.2603 24.4336 43.9868 24.3644 43.8449 24.3464C43.8321 24.2182 43.8372 23.99 43.8321 23.8362C43.7912 22.5555 43.8641 21.2721 43.8641 19.9914C43.8641 16.462 43.7733 12.9326 43.6902 9.40446L43.5407 3.07126C43.5177 2.11359 42.0312 2.10974 42.0542 3.07126C42.1475 7.00194 42.2728 10.9352 42.3277 14.8672C42.352 16.594 42.3763 18.3235 42.3763 20.0504C42.3763 21.4619 42.2907 22.8747 42.3635 24.2849C42.3891 24.7849 42.522 25.3387 42.9809 25.622C43.3975 25.8785 43.9523 25.8913 44.4226 25.9477C45.4873 26.0746 46.5622 26.0874 47.6307 25.9977C48.0308 25.9643 48.3746 25.6797 48.3746 25.2515C48.3746 24.8746 48.0334 24.4721 47.6307 24.5054L47.6333 24.5041ZM43.882 24.4708C43.8922 24.4836 43.8999 24.4926 43.8999 24.4926C43.8947 24.4977 43.8883 24.4875 43.882 24.4708Z'
        fill='#111827'
      />
      <path
        d='M54.2247 27.8027C53.0181 27.9604 51.7911 27.954 50.582 27.8155C50.4388 21.4375 50.2969 15.0607 50.1538 8.68263C50.1116 6.79036 50.0694 4.8981 50.0272 3.00583C50.0055 2.04816 48.519 2.04431 48.5408 3.00583C48.689 9.61466 48.836 16.2235 48.9843 22.8323C49.0265 24.7105 49.0686 26.5874 49.1108 28.4655C49.1172 28.7591 49.3345 29.1373 49.6566 29.1847C51.1737 29.4065 52.6998 29.4937 54.2247 29.2937C54.6222 29.2412 54.9685 28.9886 54.9685 28.5476C54.9685 28.1848 54.626 27.7502 54.2247 27.8014V27.8027Z'
        fill='#111827'
      />
      <path
        d='M56.336 10.5812C56.3757 10.5427 56.4153 10.5043 56.4575 10.4671C56.4562 10.4684 56.5099 10.4261 56.5405 10.3992C56.5661 10.3902 56.6479 10.3504 56.653 10.3415C56.7821 10.3081 56.9035 10.3184 57.0786 10.3709C57.4979 10.4966 57.8468 10.7991 58.1446 11.1209C58.3734 11.3684 58.5779 11.7286 58.6763 12.0363C58.8348 12.5363 58.8578 12.8811 58.8578 13.4209C58.8578 14.3798 60.3443 14.3824 60.3443 13.4209C60.3443 12.4594 60.1999 11.5671 59.7269 10.7684C59.2502 9.96583 58.4462 9.27097 57.5656 8.962C57.0454 8.77995 56.4638 8.77995 55.9641 9.01584C55.5947 9.1902 55.2547 9.51968 54.9863 9.8248C54.3319 10.5671 53.8334 11.6094 53.9076 12.6145C53.9881 13.7004 54.4674 14.7029 55.1512 15.5362C55.4848 15.9439 55.8861 16.2913 56.3169 16.5913C56.5457 16.7503 56.7859 16.89 57.0224 17.0375C57.1387 17.1093 57.2537 17.1823 57.3675 17.258C57.4672 17.3246 57.604 17.4234 57.6372 17.4503C57.9695 17.7323 58.2417 18.0592 58.4552 18.4387C58.5626 18.6285 58.629 18.7759 58.6878 18.9836C58.7032 19.04 58.7185 19.0977 58.73 19.1554C58.73 19.1592 58.7377 19.222 58.7402 19.2374C58.7428 19.272 58.7441 19.3054 58.7441 19.34C58.7441 19.3605 58.7389 19.4528 58.7415 19.4605C58.6827 19.8233 58.422 20.1541 58.1778 20.4117C58.1216 20.472 58.0628 20.531 58.0015 20.5874C57.9784 20.6092 57.8826 20.6848 57.8826 20.6887C57.7075 20.8066 57.5515 20.8746 57.3304 20.9169C56.5073 21.0707 55.711 20.4848 55.3148 19.831C54.8534 19.0656 54.7716 18.2349 55.1154 17.3913C55.2675 17.0182 54.9505 16.5721 54.5965 16.4747C54.1709 16.3567 53.8347 16.6208 53.6826 16.9952C52.9605 18.7643 53.7657 20.9835 55.3864 21.9515C56.3194 22.5091 57.5452 22.604 58.505 22.0579C59.2719 21.622 60.0107 20.7028 60.1794 19.831C60.3865 18.7579 59.856 17.7182 59.1914 16.9131C58.5102 16.0888 57.5081 15.7336 56.731 15.0362C56.0548 14.4298 55.5295 13.5978 55.403 12.7029C55.3493 12.326 55.4107 11.9824 55.5487 11.6927C55.7481 11.2748 56.0076 10.9004 56.3386 10.5812H56.336Z'
        fill='#111827'
      />
      <path
        d='M64.2312 23.1439C63.9001 22.7273 63.5704 22.308 63.2419 21.8888C63.2381 21.885 63.2125 21.8516 63.1818 21.8119C63.1882 21.8004 63.1946 21.7888 63.1997 21.7786C63.3378 21.567 63.4796 21.3581 63.6241 21.1517C64.1864 20.3466 64.8012 19.5799 65.4595 18.8517C66.2212 18.0094 67.0405 17.2223 67.9084 16.4902C68.2164 16.2313 68.1755 15.7031 67.9084 15.4364C67.6042 15.1313 67.1658 15.1761 66.8577 15.4364C65.2933 16.7556 63.9001 18.2645 62.6897 19.9158C62.6054 16.2351 62.4137 12.5544 62.3446 8.875C62.3088 6.99684 62.3088 5.11739 62.3689 3.23923C62.3996 2.27899 60.9131 2.28027 60.8824 3.23923C60.6664 9.94036 61.2582 16.6325 61.2454 23.3324C61.2416 25.2093 61.1892 27.0861 61.0601 28.9592C61.032 29.3617 61.4218 29.7053 61.804 29.7053C62.2296 29.7053 62.5197 29.363 62.5479 28.9592C62.6706 27.181 62.7204 25.4016 62.7294 23.6234C63.3953 24.4683 64.0663 25.308 64.7565 26.1323C65.5924 27.1285 66.4564 28.1002 67.3741 29.022C68.0515 29.7015 69.1022 28.6476 68.4247 27.9682C66.9204 26.4567 65.5579 24.8118 64.2312 23.1439Z'
        fill='#111827'
      />
      <path
        d='M74.9906 8.90942C75.0021 8.22867 75.0046 7.54791 74.9906 6.86587C74.9778 6.17999 74.9829 5.46975 74.8244 4.79797C74.5599 3.6762 73.66 2.84673 72.5238 2.67109C71.3389 2.48904 70.2551 2.94673 69.5419 3.90825C69.1674 4.41208 68.9373 5.0095 68.729 5.59795C68.5104 6.21717 68.3008 6.83766 68.1487 7.47739C67.7908 8.98377 67.6541 10.5453 67.6502 12.0914C67.6477 13.0503 69.1342 13.0529 69.1367 12.0914C69.1393 10.8568 69.2236 9.62094 69.4652 8.40943C69.6659 7.40048 69.9739 6.30819 70.3944 5.39796C70.581 4.99412 70.8021 4.60951 71.1344 4.37618C71.4604 4.1467 71.7403 4.10183 72.1314 4.11722C72.1403 4.11722 72.1953 4.12363 72.2272 4.12619C72.2579 4.1326 72.3116 4.14157 72.3205 4.14413C72.4087 4.16465 72.4969 4.18772 72.5826 4.21721C72.603 4.22362 72.6171 4.22875 72.6299 4.23388C72.6733 4.25311 72.7168 4.27618 72.7577 4.29926C72.8829 4.36849 72.9289 4.40054 72.9814 4.44797C73.1437 4.59412 73.1654 4.60694 73.2702 4.82489C73.3737 5.04155 73.4223 5.29026 73.4492 5.52872C73.5859 6.77613 73.5233 8.06969 73.4964 9.32223C73.4696 10.6055 73.4172 11.8888 73.3827 13.1734C73.3482 14.4593 73.3328 15.7439 73.3801 17.0297C73.3916 17.3503 73.3955 17.6695 73.3955 17.99C73.1322 17.8592 72.8548 17.7567 72.5736 17.6849C71.8617 17.5028 71.0015 17.4349 70.287 17.6426C68.7686 18.0836 67.9225 19.8451 67.608 21.272C67.2706 22.8053 67.2655 24.395 67.8445 25.8719C68.1462 26.6411 68.5372 27.3359 69.2364 27.8064C69.7285 28.1372 70.3637 28.2898 70.9542 28.2513C71.7901 28.1975 72.6145 27.8718 73.3188 27.377C73.3137 27.7795 73.3098 28.1821 73.3022 28.5833C73.2843 29.5436 74.7708 29.5436 74.7886 28.5833C74.8065 27.6154 74.8155 26.6475 74.8232 25.6796C74.8538 25.5629 74.8538 25.4514 74.8257 25.3488C74.8334 24.0232 74.8347 22.6989 74.8359 21.3732C74.8359 19.9643 74.9203 18.5579 74.8704 17.1503C74.8219 15.7849 74.8347 14.4208 74.873 13.0555C74.9114 11.6735 74.9689 10.2927 74.9919 8.9107L74.9906 8.90942ZM72.6529 4.24157C72.6669 4.2467 72.6746 4.24926 72.6529 4.24157V4.24157ZM73.3495 20.9476C73.3443 22.3989 73.3431 23.8488 73.3367 25.3001C72.8344 26.0065 72.0189 26.536 71.1856 26.7218C71.1255 26.736 71.0641 26.7475 71.0041 26.7565C70.9977 26.7565 70.9964 26.7577 70.9913 26.759C70.9798 26.759 70.9721 26.759 70.9542 26.759C70.8648 26.759 70.7778 26.7654 70.6884 26.759C70.6705 26.759 70.5912 26.75 70.5401 26.7462C70.5094 26.7398 70.4736 26.7334 70.4685 26.7321C70.3816 26.7052 70.2922 26.6834 70.2091 26.6475C69.8167 26.4744 69.5534 26.0847 69.354 25.6514C68.8593 24.5757 68.7724 23.4065 68.9348 22.2527C69.083 21.204 69.4371 19.9553 70.3152 19.2746C70.774 18.9195 71.5 18.9771 71.9972 19.0797C72.5557 19.1951 72.9954 19.4053 73.3661 19.8169C73.3584 20.1938 73.3507 20.5707 73.3495 20.9489V20.9476Z'
        fill='#111827'
      />
      <path
        d='M12.961 31.9949C15.3281 31.9949 16.6638 31.0077 17.3974 30.0667C18.6896 28.4103 18.8392 25.9629 18.3343 23.8809C19.2712 24.345 20.4956 24.9194 21.7546 25.3194C23.7587 25.9553 25.2414 25.9527 26.2882 25.313C27.2634 24.7168 27.7657 23.6245 27.7823 22.0669C27.8066 19.7567 26.2409 18.9734 25.0381 18.6259C27.0193 17.8452 30.2057 16.5491 30.9163 14.1645C31.264 12.9966 30.9777 11.7492 30.0638 10.4556C29.4311 9.55947 28.6182 9.0582 27.6468 8.96589C25.8996 8.80051 24.0105 10.0364 22.4435 11.3646C23.2628 9.63126 23.8993 7.48643 23.3433 5.40314C22.8487 3.54934 21.4913 2.02502 19.3108 0.872479C17.4025 -0.136473 15.7601 -0.271085 14.4296 0.472489C13.1092 1.20965 12.1877 2.74039 11.6125 5.15187C11.1626 7.03901 11.0182 9.11845 10.9223 10.4953C10.9006 10.803 10.8789 11.1312 10.8546 11.4056C10.498 11.2274 10.0366 10.9735 9.6327 10.753C7.22596 9.43511 3.92836 7.6313 1.92423 8.41077C1.26983 8.6659 0.794358 9.17742 0.550233 9.89023C-0.242214 12.2043 -0.178302 14.1094 0.739403 15.5529C2.35881 18.0965 6.20856 18.4964 8.50922 18.7362C8.86199 18.7734 9.26332 18.8144 9.57774 18.8605C9.46782 19.1093 9.32723 19.4131 9.19558 19.6964C8.63575 20.9015 7.8676 22.5528 7.38574 24.2758C6.77478 26.4604 6.79395 28.1488 7.44453 29.4385C8.05931 30.6564 9.21092 31.4436 10.8687 31.7756C11.6419 31.9308 12.3373 32 12.9597 32L12.961 31.9949ZM17.0958 21.7566C16.9219 21.7566 16.7392 21.8105 16.5743 21.9707C16.3404 22.2002 16.2816 22.5451 16.4247 22.8489C17.2888 24.6835 17.5163 27.518 16.2381 29.1565C15.2591 30.4116 13.5502 30.8052 11.1575 30.3244C9.9484 30.0821 9.16235 29.5718 8.75718 28.7667C7.63369 26.5399 9.51639 22.4899 10.5287 20.3144C10.7498 19.84 10.9402 19.431 11.0604 19.1234C11.1767 18.8272 11.4502 18.1349 10.8968 17.7413C10.5121 17.467 9.89984 17.3939 8.6626 17.2644C6.49487 17.0388 3.21771 16.6991 1.98047 14.7542C1.31584 13.7094 1.30306 12.2325 1.94213 10.3646C2.07634 9.97356 2.2885 9.84664 2.45722 9.78126C3.82483 9.24922 7.14544 11.0671 8.92972 12.0427C9.50361 12.3568 9.99826 12.6274 10.3894 12.812C10.7792 12.9966 11.3671 13.2748 11.8349 12.9453C12.2478 12.6556 12.2797 12.1774 12.3897 10.5915C12.5596 8.12745 12.915 3.00191 15.1453 1.75579C16.0145 1.2699 17.1852 1.41093 18.6257 2.17117C20.4292 3.12371 21.5386 4.33778 21.9233 5.77878C22.6557 8.52102 20.7449 11.5607 19.7185 13.194C19.1344 14.1235 18.8673 14.5478 19.1587 15.035C19.2814 15.2401 19.4884 15.376 19.7262 15.4081C20.2132 15.4734 20.5186 15.1786 21.5296 14.2017C22.9599 12.8209 25.6222 10.2492 27.5088 10.4287C28.0405 10.4787 28.484 10.7646 28.8636 11.3017C29.5116 12.2184 29.7212 13.0158 29.5065 13.7363C28.9876 15.4798 26.1067 16.6144 24.385 17.2926C23.9517 17.4631 23.5772 17.6106 23.2986 17.7439C23.0353 17.8695 22.4895 18.1311 22.4716 18.6977C22.4652 18.9003 22.5228 19.399 23.1912 19.6644C23.4098 19.7515 23.6667 19.808 23.9658 19.8746C25.35 20.181 26.3278 20.5156 26.3112 22.0464C26.2997 23.0758 26.0415 23.7322 25.5213 24.0502C24.8771 24.4438 23.728 24.3963 22.1968 23.9104C20.7832 23.4617 19.3721 22.7528 18.4391 22.2835C18.1311 22.1284 17.8869 22.0053 17.6978 21.9207C17.5597 21.8579 17.3361 21.7566 17.0958 21.7566Z'
        fill='#111827'
      />
      <path
        d='M15.8238 20.2462C15.8941 20.2462 15.9606 20.2423 16.0206 20.2359C16.9498 20.1333 17.7653 19.2808 18.0043 18.1654C18.2612 16.9642 17.7883 15.8424 16.7671 15.2373C16.5996 15.1373 16.0603 14.8834 15.4646 14.7309C14.5482 14.4963 13.8503 14.5886 13.3902 15.0052C12.392 15.9091 13.2023 17.6706 13.4682 18.25C14.2427 19.9346 15.2116 20.2474 15.8238 20.2474V20.2462ZM16.0194 16.5065C16.6891 16.9039 16.6252 17.5821 16.5664 17.8552C16.4526 18.3847 16.1101 18.7423 15.8583 18.7705C15.6142 18.7975 15.2077 18.5129 14.8026 17.6321C14.3156 16.5732 14.3654 16.177 14.3859 16.0962C14.653 15.986 15.6206 16.2757 16.0194 16.5065Z'
        fill='#111827'
      />
    </svg>
  )
}

const ProjectIcon = ({ color }: { color?: string }) => {
  const formatedColor: string | undefined = formatHexColor(color || '#111827')
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <circle cx='12' cy='12' r='12' fill={formatedColor} />
      <circle cx='12' cy='12' r='8' stroke='white' stroke-width='2' />
    </svg>
  )
}

export { Logo, ProjectIcon }
