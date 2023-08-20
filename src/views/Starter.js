import React,{useState} from 'react';
import { Row, Col,Button } from 'reactstrap';
import { CardContent,Typography,TextField ,InputLabel,Select,FormControl,MenuItem} from '@material-ui/core'; // Import from @mui/material
import { useBuildings } from '../hooks/building';
import { useCounts } from '../hooks/counts';

const Starter = () => {
  
  const { data } = useBuildings()
  const buildings = data?.data
  
  const [building,setBuilding]=useState()
  const [toDate,setToDate]=useState()
  const [fromDate,setFromDate]=useState()
  
  const [studentCount,setStudentCount]=useState('0')
  const [roomCount,setRoomCount]=useState('0')
  const [seatCount,setSeatCount]=useState('0')
  const [expenses,setExpense]=useState('0')
  const [income,setIncome]=useState('0')
  const [invoices,setInvoice]=useState('0')
  const [balance,setBalance]=useState('0')
  
  
  //react query hook
  const counts = useCounts({'branch_id':building,'from_date':fromDate,'to_date':toDate})
  
  const search =async ()=>{
    await counts.refetch()
    const count=counts?.data
    setStudentCount(count?.data?.students)
    setRoomCount(count?.data?.rooms)
    setSeatCount(count?.data?.seats)
    setExpense(count?.data?.expense)
    setIncome(count?.data?.income)
    setInvoice(count?.data?.unpaid_invoices)
    setBalance(count?.data?.balanced_amount)
  }
  
  return (
    
    <>
    
    <Row>
   
    <Col md={3} sm={3} lg={3}>
    <TextField
    label="Select From Date"
    type="date"
    value={fromDate}
    className='mb-4 w-100'
    id="outlined-start-adornment"
    onChange={(e)=>{setFromDate(e.target.value)}}
    InputLabelProps={{
      shrink: true,
    }}
    variant="outlined"
    />
    </Col>
    <Col md={3} sm={3} lg={3}>
    <TextField
    label="Select To Date"
    type="date"
    value={toDate}
    className='mb-4 w-100'
    id="outlined-start-adornment"
    onChange={(e)=>{setToDate(e.target.value)}}
    InputLabelProps={{
      shrink: true,
    }}
    variant="outlined"
    />
    </Col>
    <Col md={3} sm={3} lg={3}>
    <FormControl
    variant="outlined"
    className='w-100'>
    <InputLabel id="demo-simple-select-outlined-label">Building / Branch</InputLabel>
    <Select
    value={building}
    onChange={(e)=>{setBuilding(e.target.value)}}
    labelId="demo-simple-select-outlined-label"
    id="demo-simple-select-outlined"
    >
    <MenuItem value="">
    <em>None</em>
    </MenuItem>
    {buildings?.map((building, index) => (
      <MenuItem value={building.branch_id}>{building.branch_name}</MenuItem>
      ))}
      </Select>
      </FormControl>
      </Col>
      <Col md={3} sm={3} lg={3}>
      <Button className="mt-2 themeButtons" onClick={search}>Search</Button>
      
      </Col>
      </Row>
      
      <Row>
      <Col md={3} sm={3} lg={3}>
      <CardContent className='card'>
      
      <Typography variant="h5" component="div">
      <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
      <path d="M9.61035 30.2778C9.99306 28.8017 11.1412 25.1111 16.4992 25.1111C21.8572 25.1111 23.0055 28.8017 23.3881 30.2778" stroke="#2B467D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M16.5001 23.3889C18.4024 23.3889 19.9446 21.8468 19.9446 19.9444C19.9446 18.0421 18.4024 16.5 16.5001 16.5C14.5978 16.5 13.0557 18.0421 13.0557 19.9444C13.0557 21.8468 14.5978 23.3889 16.5001 23.3889Z" stroke="#2B467D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M11.333 9.61108C11.6201 9.11902 12.4812 7.88885 16.4997 7.88885C20.5181 7.88885 21.3792 9.11902 21.6663 9.61108" stroke="#2B467D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M16.5001 7.88889C18.4024 7.88889 19.9446 6.34676 19.9446 4.44444C19.9446 2.54213 18.4024 1 16.5001 1C14.5978 1 13.0557 2.54213 13.0557 4.44444C13.0557 6.34676 14.5978 7.88889 16.5001 7.88889Z" stroke="#2B467D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M1 18.2222C1.33487 17.2381 2.33951 14.7778 7.02778 14.7778C11.716 14.7778 12.7207 17.2381 13.0556 18.2222" stroke="#2B467D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M7.88878 13.0555C9.79109 13.0555 11.3332 11.5134 11.3332 9.61107C11.3332 7.70876 9.79109 6.16663 7.88878 6.16663C5.98647 6.16663 4.44434 7.70876 4.44434 9.61107C4.44434 11.5134 5.98647 13.0555 7.88878 13.0555Z" stroke="#2B467D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M19.9443 18.2222C20.2791 17.2381 21.2839 14.7778 25.9721 14.7778C30.6603 14.7778 31.6651 17.2381 31.9999 18.2222" stroke="#2B467D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M25.1105 13.0555C27.0128 13.0555 28.5549 11.5134 28.5549 9.61107C28.5549 7.70876 27.0128 6.16663 25.1105 6.16663C23.2081 6.16663 21.666 7.70876 21.666 9.61107C21.666 11.5134 23.2081 13.0555 25.1105 13.0555Z" stroke="#2B467D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary" className='mt-3'>
      No of Students
      </Typography>
      <Typography variant="h5" component="div">
      {studentCount}
      </Typography>
      </CardContent>
      </Col>
      <Col md={3} sm={3} lg={3}>
      <CardContent className='card'>
      
      <Typography variant="h5" component="div">
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M17.1111 4.66667V28H0V24.8889H3.11111V0H17.1111V1.55556H24.8889V24.8889H28V28H21.7778V4.66667H17.1111ZM10.8889 12.4444V15.5556H14V12.4444H10.8889Z" fill="#2B467D"/>
      </svg>
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary" className='mt-3'>
      No of Rooms
      </Typography>
      <Typography variant="h5" component="div">
      {roomCount}
      </Typography>
      </CardContent>
      </Col>
      <Col md={3} sm={3} lg={3}>
      <CardContent className='card'>
      
      <Typography variant="h5" component="div">
      <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
      <g clip-path="url(#clip0_150_1782)">
      <path d="M10.996 18.9049C14.2691 18.9049 17.5447 18.9304 20.8178 18.887C21.7625 18.8742 22.0919 19.1806 22.0663 20.133C22.0102 22.2574 22.0433 24.3843 22.0536 26.5112C22.0561 27.1036 22.0153 27.5173 21.257 27.7011C20.1719 27.9641 20.3787 29.131 20.0851 29.9046C19.8017 30.6502 19.5004 31.023 18.6502 30.9974C17.8486 30.9745 17.6954 30.4766 17.4937 29.8919C16.5771 27.2517 17.2818 27.7062 14.3763 27.6756C11.7415 27.6475 9.10412 27.7037 6.4693 27.65C5.60379 27.6322 5.11104 27.8594 4.93998 28.7454C4.83531 29.2842 4.5851 29.7897 4.43191 30.3208C4.26851 30.8902 3.85491 30.9898 3.34684 30.9847C2.81834 30.9796 2.32559 30.9745 2.15197 30.308C2.00389 29.7335 1.78177 29.1795 1.59029 28.6152C1.42689 28.1377 1.34008 27.6602 0.632867 27.6322C-0.104985 27.6015 0.0175649 26.9453 0.0150118 26.4551C0.00735243 24.369 0.0507555 22.2855 0.00224619 20.202C-0.0207319 19.2291 0.262665 18.8589 1.30434 18.8793C4.53404 18.9457 7.76629 18.9049 10.996 18.9049Z" fill="#2B467D"/>
      <path d="M19.8096 5.65048C19.8096 7.13652 19.779 8.62511 19.8224 10.1112C19.8428 10.8133 19.6334 11.0661 18.9007 11.0916C17.7033 11.135 16.8786 11.0559 16.5952 9.52133C16.2608 7.71868 14.7212 6.69735 12.8677 6.62586C11.7647 6.585 10.6592 6.60288 9.55371 6.61564C7.23548 6.64118 5.91807 7.69825 5.27468 10.0243C5.02958 10.9103 3.14027 11.518 2.41518 10.9512C2.12158 10.7214 2.23902 10.4048 2.23902 10.129C2.23136 7.15695 2.25689 4.18232 2.21859 1.20769C2.20838 0.365087 2.52242 0.0459207 3.33175 0.0893274C4.36066 0.142947 5.69084 -0.321759 5.50446 1.57537C5.45595 2.07071 5.94105 1.84347 6.17083 1.74899C9.39031 0.42126 12.6098 0.377854 15.8318 1.73112C16.3501 1.94815 16.631 1.86645 16.6208 1.22811C16.5876 -0.638372 18.0173 0.255294 18.842 0.117414C19.8887 -0.0587659 19.8198 0.74298 19.8147 1.44515C19.8019 2.84693 19.8096 4.2487 19.8096 5.65048Z" fill="#2B467D"/>
      <path d="M11.0058 17.6971C8.16164 17.6971 5.31746 17.6716 2.47328 17.7124C1.63586 17.7252 1.32438 17.5184 1.49544 16.6375C1.72266 15.4732 1.86819 14.291 2.01117 13.1113C2.08521 12.5088 2.31244 12.2458 2.97625 12.2509C8.36844 12.2764 13.7606 12.2662 19.1528 12.2611C19.6149 12.2611 19.9622 12.2917 20.0285 12.8943C20.1664 14.1582 20.3145 15.4272 20.5647 16.6732C20.7587 17.6384 20.2992 17.715 19.5435 17.7073C16.6942 17.6818 13.85 17.6971 11.0058 17.6971Z" fill="#2B467D"/>
      <path d="M25.7684 9.93499C24.5735 10.2388 24.2952 9.55455 24.3642 8.31363C24.4561 6.62843 24.3846 6.6463 22.6408 6.60289C22.1327 6.59013 21.377 6.90929 21.1702 6.24288C20.9225 5.44624 20.8766 4.51682 21.2059 3.74061C21.451 3.16866 22.1966 3.4291 22.7225 3.42144C24.525 3.3908 24.3616 3.60784 24.3973 1.78986C24.4076 1.26643 24.1114 0.538732 24.6705 0.262972C25.4365 -0.114921 26.3607 -0.035768 27.1649 0.201692C27.8619 0.408512 27.5658 1.14642 27.5785 1.65709C27.6143 3.39591 27.5964 3.38059 29.3504 3.41889C29.8661 3.43166 30.604 3.16611 30.8006 3.85806C31.0304 4.66492 31.1197 5.59178 30.7214 6.35012C30.4406 6.88121 29.6951 6.65651 29.187 6.59268C27.8824 6.42671 27.4815 6.91185 27.5632 8.21149C27.6756 9.92989 27.5862 9.93499 25.7684 9.93499Z" fill="#2B467D"/>
      <path d="M11.0391 11.0585C9.80593 11.0585 8.57022 11.0151 7.33962 11.0712C6.38986 11.1147 6.29028 10.7419 6.5507 9.94523C6.96686 8.66856 7.81705 7.92043 9.13957 7.88213C10.4136 7.84383 11.6927 7.83873 12.9667 7.88469C14.4271 7.93575 15.4866 9.03369 15.6602 10.4738C15.7368 11.1095 15.3871 11.0687 14.9913 11.0687C13.6739 11.0712 12.3539 11.0687 11.0365 11.0687C11.0391 11.0661 11.0391 11.0636 11.0391 11.0585Z" fill="#2B467D"/>
      </g>
      <defs>
      <clipPath id="clip0_150_1782">
      <rect width="31" height="31" fill="white"/>
      </clipPath>
      </defs>
      </svg>
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary" className='mt-3'>
      No. of Seats
      </Typography>
      <Typography variant="h5" component="div">
      {seatCount}
      </Typography>
      </CardContent>
      </Col>
      <Col md={3} sm={3} lg={3}>
      <CardContent className='card'>
      
      <Typography variant="h5" component="div">
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="29" viewBox="0 0 30 29" fill="none">
      <g clip-path="url(#clip0_155_1789)">
      <path d="M13.4824 11.3062C17.0631 11.3062 20.6431 11.3053 24.2238 11.3062C25.8964 11.3062 26.9577 12.3353 26.9586 13.9554C26.9594 14.7745 26.9501 15.5936 26.9645 16.4118C26.9688 16.6474 26.9103 16.7204 26.6543 16.718C25.1606 16.7057 23.666 16.7451 22.1732 16.7032C20.365 16.6531 19.6504 17.583 19.424 18.9117C19.2596 19.8769 19.2579 20.8503 19.519 21.8056C19.8462 22.9997 20.6397 23.5874 21.9146 23.5906C23.4931 23.5947 25.0716 23.5972 26.65 23.5857C26.8976 23.5841 26.9696 23.644 26.9645 23.8877C26.9484 24.7372 26.9611 25.5866 26.9577 26.4361C26.9527 27.9347 25.8659 28.9951 24.3222 28.9959C17.0979 28.9983 9.87277 28.9983 2.64849 28.9959C1.09971 28.9951 0.00360281 27.9388 0.00190737 26.4467C-0.000635791 22.2504 -0.000635791 18.0533 0.00190737 13.857C0.00275509 12.3616 1.09632 11.3062 2.6451 11.3053C6.25809 11.3045 9.87023 11.3062 13.4824 11.3062Z" fill="#2B467D"/>
      <path d="M4.41309 10.3205C5.03786 9.79032 5.59735 9.31349 6.15854 8.83829C8.47621 6.87678 10.7973 4.91855 13.109 2.95048C13.6202 2.5155 14.1695 2.30211 14.8214 2.58608C15.4928 2.87825 15.7793 3.41418 15.77 4.11589C15.7624 4.68875 15.7615 5.26161 15.7725 5.83447C15.7759 6.01913 15.7276 6.12583 15.5445 6.21364C12.7589 7.54813 9.97753 8.89 7.19531 10.2294C7.12071 10.2655 7.04017 10.3148 6.96134 10.3156C6.14074 10.323 5.32015 10.3205 4.41309 10.3205Z" fill="#2B467D"/>
      <path d="M24.8609 22.6099C23.8767 22.6099 22.8917 22.6123 21.9075 22.6091C21.1072 22.6066 20.6825 22.3038 20.4994 21.5487C20.2739 20.6196 20.2731 19.6791 20.5003 18.7509C20.6851 17.9975 21.1081 17.6971 21.9117 17.6963C23.9123 17.6938 25.913 17.693 27.9144 17.6963C28.8452 17.6979 29.4937 18.3233 29.5014 19.2187C29.5064 19.8219 29.5039 20.426 29.5022 21.0292C29.4988 21.9878 28.8639 22.6066 27.878 22.6091C26.8717 22.6123 25.8663 22.6099 24.8609 22.6099ZM25.4323 20.1494C25.4306 19.066 24.5108 18.1829 23.3884 18.187C22.2805 18.1911 21.3717 19.0685 21.3658 20.1387C21.3598 21.2237 22.2728 22.1142 23.3935 22.1166C24.5151 22.1199 25.4331 21.2335 25.4323 20.1494Z" fill="#2B467D"/>
      <path d="M25.4953 4.85865C25.4953 3.93371 25.4953 3.93371 24.7908 3.93371C24.6425 3.93371 24.4941 3.93125 24.3458 3.93371C24.1737 3.93699 24.0347 3.88528 23.9507 3.73017C23.8634 3.56849 23.9312 3.43717 24.0321 3.30668C24.5323 2.65831 25.0299 2.00913 25.5292 1.35994C25.7878 1.02345 26.0421 0.682851 26.3074 0.350461C26.677 -0.112423 27.2263 -0.12145 27.5892 0.343075C28.3606 1.33122 29.1193 2.33003 29.8839 3.32309C29.984 3.45359 30.0492 3.5849 29.9552 3.74658C29.8644 3.90252 29.7195 3.93535 29.5508 3.93371C29.2753 3.93125 28.9989 3.94602 28.7251 3.92878C28.5225 3.91647 28.4869 3.99198 28.4759 4.17171C28.3547 6.26044 27.4247 7.92977 25.6818 9.1789C25.4978 9.31104 25.3775 9.3135 25.1952 9.17316C24.69 8.78414 24.1712 8.41153 23.6456 8.0496C23.4319 7.90269 23.4319 7.84032 23.6617 7.70654C24.8553 7.01385 25.4453 5.97401 25.4953 4.85865Z" fill="#2B467D"/>
      <path d="M9.41797 10.3C9.46375 10.2056 9.5553 10.1941 9.62566 10.1605C12.4257 8.80874 15.2274 7.46195 18.0266 6.10777C18.6064 5.82708 19.1659 5.81887 19.7076 6.17589C20.1086 6.44016 20.3341 6.81933 20.3409 7.28796C20.3553 8.22932 20.3434 9.16986 20.3502 10.1112C20.351 10.2631 20.3171 10.3262 20.1416 10.3262C16.5948 10.3213 13.0479 10.3221 9.50105 10.3213C9.47477 10.3213 9.44933 10.3082 9.41797 10.3Z" fill="#2B467D"/>
      <path d="M23.413 21.1343C22.8611 21.1416 22.394 20.705 22.383 20.1724C22.372 19.6225 22.8323 19.1695 23.4003 19.1703C23.953 19.1711 24.4116 19.6127 24.415 20.1461C24.4175 20.6804 23.9649 21.1277 23.413 21.1343Z" fill="#2B467D"/>
      </g>
      <defs>
      <clipPath id="clip0_155_1789">
      <rect width="30" height="29" fill="white"/>
      </clipPath>
      </defs>
      </svg>
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary" className='mt-3'>
      Expenses
      </Typography>
      <Typography variant="h5" component="div">
      {expenses}
      </Typography>
      </CardContent>
      </Col>
      <Col md={3} sm={3} lg={3}>
      <CardContent className='card'>
      
      <Typography variant="h5" component="div">
      <svg xmlns="http://www.w3.org/2000/svg" width="27" height="29" viewBox="0 0 27 29" fill="none">
      <g clip-path="url(#clip0_155_1818)">
      <path d="M16.9915 5.21604C17.1086 5.20205 17.1749 5.10951 17.2577 5.04886C20.8461 2.43144 25.8979 4.31324 26.8602 8.62662C27.6219 12.0434 25.1994 15.4765 21.7186 15.9174C20.068 16.1266 18.5711 15.751 17.2319 14.7619C17.1632 14.7114 17.0953 14.6095 17.0126 14.6422C16.9033 14.6857 16.9525 14.8125 16.9525 14.9027C16.9502 18.7238 16.9509 22.5457 16.9494 26.3669C16.9494 26.9151 16.8901 27.4517 16.5779 27.9283C16.0925 28.6694 15.3791 28.9905 14.5199 28.9921C10.4897 28.9999 6.45953 29.0069 2.43013 28.989C0.939499 28.9828 0.00219411 27.9975 0.00219411 26.5123C-0.0001472 18.5006 -0.000927637 10.4898 0.00141367 2.4781C0.00141367 0.986649 0.969156 0.00764469 2.46447 0.00453427C6.46499 -0.00246418 10.4663 -0.00168657 14.4668 0.00453427C15.7155 0.00686708 16.6021 0.669387 16.8682 1.7697C16.9346 2.04341 16.9486 2.32568 16.9486 2.60718C16.9502 3.37312 16.9478 4.13984 16.9509 4.90578C16.9517 5.00764 16.9182 5.11729 16.9915 5.21604ZM0.997251 13.8615C0.997251 16.849 0.997251 19.8366 0.997251 22.8234C0.997251 23.2106 1.00349 23.2168 1.38513 23.2168C6.11614 23.2176 10.8471 23.2145 15.5782 23.223C15.8771 23.2238 15.9574 23.1313 15.9559 22.8412C15.9465 19.8148 15.9489 16.7891 15.9528 13.7627C15.9528 13.5496 15.8935 13.3747 15.7803 13.1935C14.5753 11.265 14.3974 9.2417 15.4486 7.22304C15.8373 6.47576 16.0043 5.76503 15.9504 4.96254C15.9489 4.9431 15.9504 4.92366 15.9504 4.90422C15.9489 4.50531 15.9489 4.50453 15.5462 4.50453C10.8347 4.50453 6.12316 4.50453 1.41166 4.50453C0.998032 4.50453 0.997251 4.50531 0.997251 4.92755C0.997251 7.90578 0.997251 10.884 0.997251 13.8615ZM23.3739 8.80547C23.4013 8.33579 23.2303 7.93377 22.8596 7.68416C22.4702 7.42211 22.2095 7.1585 22.2884 6.64606C22.3172 6.45632 22.1471 6.31013 21.9364 6.28447C21.7381 6.26037 21.6063 6.36845 21.5142 6.53408C21.4642 6.62351 21.4634 6.72071 21.4666 6.81713C21.4744 7.04186 21.4861 7.23782 21.1513 7.23471C20.804 7.2316 20.8531 7.01153 20.8508 6.8008C20.8508 6.76192 20.8492 6.72304 20.8477 6.68416C20.8375 6.4571 20.7142 6.32024 20.4949 6.28758C20.2686 6.25337 20.1297 6.37856 20.0462 6.57763C19.9915 6.70827 20.0048 6.84513 20.0087 6.97965C20.0134 7.15461 19.933 7.22693 19.7652 7.22615C19.4835 7.22537 19.2009 7.22693 18.9192 7.22926C18.8014 7.23004 18.6835 7.23393 18.5906 7.32024C18.4681 7.43299 18.3963 7.5683 18.4517 7.73548C18.5212 7.94621 18.6796 8.02864 18.8981 8.0403C19.2977 8.0613 19.2985 8.06752 19.2993 8.46021C19.3001 9.42911 19.3001 10.3988 19.2993 11.3677C19.2993 11.7534 19.2977 11.7534 18.8966 11.7783C18.625 11.7954 18.4424 11.9509 18.4361 12.1694C18.4299 12.3887 18.6343 12.5955 18.8911 12.6118C19.0847 12.6243 19.2798 12.6165 19.4749 12.6165C19.9712 12.6173 19.9705 12.6165 20.0118 13.0916C20.0157 13.1398 20.0212 13.1888 20.036 13.2339C20.107 13.4579 20.2623 13.5722 20.498 13.5442C20.7244 13.5178 20.8375 13.3731 20.85 13.1507C20.8563 13.0442 20.8555 12.9377 20.8563 12.8311C20.857 12.688 20.9265 12.6282 21.0701 12.6157C21.4049 12.587 21.4603 12.6313 21.4673 12.9688C21.4689 13.0364 21.4627 13.1056 21.4744 13.1717C21.5173 13.4151 21.6632 13.552 21.9153 13.5457C22.1635 13.5403 22.2798 13.384 22.3032 13.1562C22.3172 13.0216 22.3165 12.8848 22.3079 12.7495C22.2969 12.573 22.3641 12.4711 22.5264 12.3856C23.4418 11.9019 23.6643 10.9097 23.0415 10.0753C22.9291 9.92522 22.9392 9.83579 23.0579 9.70438C23.2865 9.45166 23.3896 9.14295 23.3739 8.80547ZM8.48008 24.751C7.71603 24.7495 7.10027 25.3506 7.09715 26.1017C7.09403 26.8397 7.72696 27.4641 8.47696 27.4641C9.2215 27.4633 9.82712 26.8646 9.83804 26.1204C9.84897 25.3646 9.24257 24.7526 8.48008 24.751ZM8.44808 2.72537C9.07009 2.72537 9.6921 2.72771 10.3141 2.7246C10.638 2.72304 10.837 2.5613 10.844 2.3078C10.851 2.05197 10.6567 1.88789 10.3258 1.88712C9.0818 1.88478 7.837 1.88401 6.59299 1.88712C6.2652 1.88789 6.06697 2.05041 6.05995 2.30313C6.05292 2.55197 6.2574 2.72226 6.58128 2.72382C7.20407 2.72771 7.82608 2.72537 8.44808 2.72537Z" fill="#2B467D"/>
      <path d="M2.68262 13.5327C2.6873 10.3554 5.2963 7.78229 8.50858 7.78773C11.6935 7.79317 14.2979 10.3865 14.2659 13.5638C14.2339 16.7473 11.724 19.3212 8.47268 19.3157C5.10978 19.3103 2.68652 16.6097 2.68262 13.5327ZM11.8489 16.8865C13.2185 15.5591 13.6844 13.5179 12.8993 11.6563C12.1173 9.80328 10.0843 8.577 8.10041 8.76051C5.97294 8.95725 4.25052 10.4479 3.77679 12.4705C3.34755 14.3041 4.14828 16.1804 5.1129 16.9145C5.15894 16.787 5.11212 16.6664 5.09261 16.5443C4.9014 15.339 5.42976 14.5669 6.55827 14.402C6.89151 14.353 7.16077 14.4681 7.40114 14.6999C8.13787 15.4106 8.77159 15.4184 9.51066 14.7224C9.90946 14.3468 10.3473 14.2675 10.8515 14.4751C11.6748 14.8149 12.0088 15.4316 11.8652 16.3709C11.841 16.5311 11.7973 16.6897 11.8489 16.8865Z" fill="#2B467D"/>
      <path d="M21.0332 8.04356C21.3243 8.04511 21.6162 8.02645 21.9057 8.07622C22.271 8.1392 22.5527 8.43236 22.5543 8.75584C22.5558 9.05911 22.2843 9.38026 21.9385 9.43936C21.3891 9.53345 20.8334 9.48368 20.2801 9.48135C20.1521 9.48057 20.0889 9.40592 20.0897 9.27606C20.0912 8.93702 20.092 8.59799 20.0889 8.25895C20.0873 8.08866 20.1911 8.04433 20.3332 8.04356C20.5665 8.04278 20.7999 8.04356 21.0332 8.04356Z" fill="#2B467D"/>
      <path d="M21.1555 10.3538C21.3794 10.3538 21.6034 10.3484 21.8274 10.3546C22.2254 10.3655 22.5267 10.6408 22.5524 11.0101C22.5782 11.3725 22.277 11.7457 21.8875 11.766C21.3732 11.7932 20.8558 11.7737 20.3399 11.7745C20.1862 11.7745 20.1417 11.6828 20.1425 11.5475C20.144 11.2271 20.1471 10.9075 20.1417 10.5871C20.1386 10.4051 20.233 10.3507 20.3961 10.3531C20.649 10.3562 20.9026 10.3538 21.1555 10.3538Z" fill="#2B467D"/>
      <path d="M10.7166 11.923C10.6393 12.6952 10.2741 13.5101 9.52329 14.1151C8.90986 14.6096 8.17547 14.6322 7.55971 14.1439C6.7223 13.4798 6.22204 12.598 6.3313 11.5163C6.47334 10.1096 8.02953 9.30482 9.38749 9.87403C10.2382 10.2317 10.7213 10.9106 10.7166 11.923Z" fill="#2B467D"/>
      </g>
      <defs>
      <clipPath id="clip0_155_1818">
      <rect width="27" height="29" fill="white"/>
      </clipPath>
      </defs>
      </svg>    </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary" className='mt-3'>
      Balance Amount
      </Typography>
      <Typography variant="h5" component="div">
      {balance}
      </Typography>
      </CardContent>
      </Col>
      <Col md={3} sm={3} lg={3}>
      <CardContent className='card'>
      
      <Typography variant="h5" component="div">
      <svg xmlns="http://www.w3.org/2000/svg" width="35" height="26" viewBox="0 0 35 26" fill="none">
      <g clip-path="url(#clip0_155_1825)">
      <path d="M20.5054 23.4839C20.2873 23.4839 20.1518 23.4839 20.0164 23.4839C13.7303 23.4839 7.44313 23.4839 1.15699 23.4839C0.217854 23.4839 0.000746927 23.2526 0.000746927 22.251C-0.000248976 15.2366 -0.000248976 8.22209 0.000746927 1.20762C0.000746927 1.02474 -0.00124488 0.837659 0.0346076 0.661088C0.11428 0.273264 0.3523 0.0483467 0.731739 0.0105101C0.867182 -0.00315304 1.00462 0.00105101 1.14106 0.00105101C12.0502 0 22.9583 0 33.8674 0C34.7787 0 34.9997 0.237529 34.9997 1.21813C34.9997 2.97542 34.9997 4.73167 34.9997 6.48896C34.9997 8.52163 34.9997 10.5532 34.9997 12.5859C34.9997 12.7267 34.9997 12.8676 34.9997 13.0053C34.8524 13.0399 34.8294 12.9264 34.7836 12.8634C34.0357 11.8449 33.1394 11.0073 32.0618 10.3966C31.8497 10.2768 31.8069 10.1286 31.8079 9.8974C31.8158 8.03606 31.8149 6.17366 31.8109 4.31231C31.8099 3.69011 31.5071 3.34958 30.9245 3.34748C28.7256 3.34012 26.5266 3.34433 24.3277 3.34538C24.2938 3.34538 24.2599 3.35904 24.1534 3.38217C25.8713 4.9692 27.0136 6.88099 27.5514 9.21635C26.92 9.30043 26.3025 9.34983 25.701 9.51484C23.8496 10.0214 22.3149 11.0504 21.0999 12.6038C20.9167 12.8381 20.846 12.8665 20.6637 12.5964C20.1498 11.8365 19.4487 11.3278 18.5962 11.0756C18.3801 11.0115 18.2945 10.9295 18.2965 10.6825C18.3074 9.24052 18.3084 7.79748 18.2965 6.35549C18.2935 6.01496 18.417 6.04754 18.6211 6.17261C19.4139 6.65608 19.8411 7.37497 19.8859 8.34506C19.9068 8.78858 20.123 9.09758 20.4845 9.19112C20.836 9.28256 21.1179 9.15329 21.332 8.85059C21.4505 8.68348 21.4654 8.4901 21.4654 8.2904C21.4575 6.50053 20.2893 4.87776 18.6072 4.36276C18.3682 4.28919 18.2795 4.19355 18.2965 3.93815C18.3114 3.70378 18.3094 3.46414 18.2766 3.23292C18.2128 2.78414 17.8882 2.51087 17.4739 2.52244C17.0805 2.53295 16.7857 2.81357 16.714 3.24658C16.712 3.2592 16.706 3.27286 16.708 3.28547C16.8723 4.09265 16.4331 4.33964 15.7958 4.62446C14.2591 5.31183 13.4315 6.94721 13.544 8.77702C13.6426 10.3725 14.7481 11.8575 16.2728 12.3557C16.6403 12.4755 16.709 12.6469 16.704 13.0095C16.6851 14.36 16.6971 15.7106 16.6961 17.0611C16.6961 17.4616 16.6642 17.4836 16.3355 17.2808C15.5707 16.8068 15.1624 16.1005 15.1126 15.164C15.0777 14.4914 14.5618 14.0931 14.028 14.3274C13.6785 14.4809 13.5311 14.7689 13.5301 15.1651C13.5241 16.9434 14.6923 18.5946 16.3664 19.1117C16.6433 19.1968 16.719 19.3208 16.702 19.5972C16.6881 19.8305 16.6931 20.0723 16.7329 20.3014C16.8036 20.7113 17.1143 20.9625 17.4988 20.9625C17.8842 20.9625 18.1959 20.7123 18.2636 20.3014C18.3054 20.046 18.2915 19.7801 18.2995 19.5184C18.3064 19.2945 18.8611 18.9035 19.0553 18.9834C19.131 19.015 19.1271 19.0833 19.131 19.1442C19.2296 20.6871 19.6977 22.106 20.5054 23.4839ZM10.887 20.1406C8.43803 17.8452 7.16726 15.0715 7.17025 11.7283C7.17324 8.3913 8.44998 5.62398 10.8153 3.40739C10.6918 3.3107 10.5902 3.34538 10.4956 3.34538C8.3962 3.34328 6.29585 3.34223 4.19648 3.34433C3.46848 3.34538 3.18664 3.64702 3.18664 4.41952C3.18664 9.29728 3.18664 14.175 3.18664 19.0528C3.18664 19.8442 3.46748 20.1395 4.22238 20.1406C5.98712 20.1427 7.75086 20.1416 9.5156 20.1416C9.93487 20.1406 10.3541 20.1406 10.887 20.1406Z" fill="#2B467D"/>
      <path d="M27.8112 26C23.8525 25.9801 20.6746 22.601 20.6885 18.4264C20.7025 14.2612 23.9391 10.8654 27.863 10.8969C31.8128 10.9285 35.0216 14.3411 34.9977 18.4821C34.9728 22.6525 31.754 26.02 27.8112 26ZM23.8615 21.8401C23.8645 21.8622 23.8694 21.9011 23.8754 21.94C23.9322 22.2637 24.1045 22.4896 24.3983 22.5979C24.7428 22.7251 25.0317 22.6031 25.2786 22.3425C26.0614 21.5175 26.8472 20.6977 27.62 19.8632C27.7913 19.6782 27.8879 19.6792 28.0582 19.8642C28.8131 20.6808 29.5809 21.4828 30.3478 22.2868C30.7661 22.7261 31.2102 22.7692 31.5628 22.415C31.9213 22.0556 31.8884 21.5469 31.4712 21.1033C30.8497 20.4433 30.2203 19.7906 29.6028 19.1264C29.3977 18.9057 29.0282 18.7133 29.0412 18.4474C29.0531 18.2194 29.3917 18.005 29.5919 17.7927C30.2402 17.1042 30.8935 16.4221 31.5399 15.7316C31.7739 15.4825 31.8815 15.1882 31.7649 14.8361C31.6614 14.5229 31.4492 14.3359 31.1475 14.2739C30.8218 14.2076 30.5748 14.3748 30.3538 14.6091C29.5919 15.4174 28.8191 16.2161 28.0662 17.0349C27.8849 17.2314 27.7903 17.2356 27.6071 17.037C26.8452 16.2098 26.0674 15.3984 25.2916 14.586C24.9679 14.2476 24.6492 14.1761 24.3156 14.3464C23.8067 14.606 23.7101 15.2692 24.1343 15.7274C24.8902 16.543 25.6481 17.3565 26.4309 18.1426C26.6898 18.4033 26.651 18.5389 26.4179 18.7764C25.666 19.5405 24.939 20.3298 24.1981 21.1055C24.0069 21.3062 23.8655 21.5269 23.8615 21.8401Z" fill="#2B467D"/>
      <path d="M16.6979 8.39762C16.6979 9.07868 16.6919 9.75869 16.7009 10.4397C16.7038 10.6731 16.659 10.7572 16.4369 10.6289C15.6064 10.1507 15.1343 9.42236 15.1214 8.42074C15.1084 7.40126 15.5735 6.65504 16.4111 6.15686C16.6491 6.01497 16.7048 6.09905 16.7009 6.35655C16.6919 7.03656 16.6979 7.71656 16.6979 8.39762Z" fill="#2B467D"/>
      <path d="M18.3014 15.0862C18.3014 14.4199 18.3144 13.7536 18.2954 13.0872C18.2865 12.7456 18.392 12.754 18.6251 12.8917C19.2047 13.2344 19.5881 13.7399 19.7913 14.402C19.8461 14.5796 19.8411 14.751 19.7664 14.9328C19.5483 15.4604 19.3939 16.0101 19.2844 16.5745C19.2286 16.8625 18.7237 17.348 18.4488 17.3922C18.2447 17.4247 18.3044 17.2608 18.3034 17.163C18.2984 16.4704 18.3014 15.7778 18.3014 15.0862Z" fill="#2B467D"/>
      </g>
      <defs>
      <clipPath id="clip0_155_1825">
      <rect width="35" height="26" fill="white"/>
      </clipPath>
      </defs>
      </svg>
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary" className='mt-3'>
      Unpaid Invoices
      </Typography>
      <Typography variant="h5" component="div">
      {invoices}
      </Typography>
      </CardContent>
      </Col>
      <Col md={3} sm={3} lg={3}>
      <CardContent className='card'>
      
      <Typography variant="h5" component="div">
      <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
      <g clip-path="url(#clip0_155_1842)">
      <path d="M6.03934 37C5.6741 36.8281 5.43909 36.5414 5.23933 36.1987C3.58743 33.3613 1.92377 30.5297 0.265005 27.6962C-0.196197 26.9084 -0.0640054 26.415 0.729146 25.9622C2.32426 25.0528 3.91937 24.1443 5.51547 23.2378C6.23126 22.8314 6.75709 22.9665 7.17031 23.6723C8.87412 26.5772 10.576 29.4841 12.2749 32.392C12.6744 33.0765 12.5373 33.6075 11.847 34.0004C10.0844 35.0044 8.31696 35.9998 6.55048 36.999C6.38108 37 6.2107 37 6.03934 37Z" fill="#2B467D"/>
      <path d="M22.0954 18.2987C16.9526 18.2794 12.8145 14.1648 12.8449 9.10013C12.8752 4.05095 17.0457 -0.0202596 22.1649 1.43579e-05C27.29 0.0202883 31.4262 4.15135 31.4007 9.22274C31.3762 14.2401 27.196 18.318 22.0954 18.2987ZM18.7279 11.7744C18.7201 12.8972 19.478 13.9871 20.5855 14.3907C20.8753 14.4959 21.032 14.6021 21.0555 14.9458C21.0897 15.4488 21.4981 15.7934 21.9984 15.8533C22.4743 15.9103 23.0354 15.667 23.0961 15.2113C23.1764 14.6031 23.525 14.381 24.0264 14.2285C24.0939 14.2082 24.1527 14.157 24.2134 14.1165C25.9427 12.9802 25.9583 10.6091 24.2418 9.34149C23.2645 8.62031 22.2785 7.91072 21.2973 7.19534C21.0085 6.98488 20.8381 6.72228 20.9644 6.35735C21.0888 5.99821 21.3776 5.87367 21.739 5.87271C21.971 5.87174 22.2031 5.86981 22.4352 5.87271C23.0266 5.88043 23.2528 6.07834 23.3253 6.65084C23.4046 7.27161 23.9059 7.70123 24.4944 7.65392C25.1035 7.60468 25.5549 7.08432 25.5108 6.45776C25.4344 5.37937 24.9311 4.54814 23.9519 4.05095C23.5456 3.84435 23.1784 3.72753 23.1196 3.15407C23.0707 2.66942 22.5057 2.40103 21.9887 2.45413C21.4834 2.50626 21.1015 2.89919 21.0271 3.43983C21.0055 3.59527 21.0594 3.75939 20.8156 3.83469C19.6327 4.20252 18.9149 5.00672 18.7553 6.21447C18.5987 7.39519 19.1069 8.31234 20.0782 9.00359C21.0476 9.69387 22.0043 10.4035 22.9639 11.1073C23.241 11.31 23.3938 11.5707 23.2841 11.9201C23.1705 12.2822 22.8954 12.4241 22.5301 12.428C22.2981 12.4299 22.066 12.4289 21.8339 12.4289C21.2151 12.4309 20.9977 12.2436 20.9213 11.646C20.8449 11.0484 20.3573 10.6381 19.7639 10.6718C19.1764 10.7037 18.7328 11.1768 18.7279 11.7744Z" fill="#2B467D"/>
      <path d="M18.8897 31.3686C17.4484 31.3686 16.007 31.3629 14.5656 31.3735C14.3198 31.3754 14.1739 31.3126 14.0456 31.0916C12.6699 28.7214 11.2863 26.3552 9.89188 23.9957C9.75577 23.7649 9.75577 23.596 9.89384 23.3749C11.1805 21.306 13.0576 20.0896 15.4704 19.7352C17.7548 19.3993 19.7348 20.1021 21.3965 21.6729C21.5365 21.8051 21.6775 21.8351 21.8547 21.8341C23.1737 21.8302 24.4927 21.8244 25.8127 21.8351C26.8487 21.8428 27.5468 22.7107 27.2942 23.6501C27.1209 24.2921 26.55 24.7082 25.8127 24.7101C23.9806 24.7149 22.1485 24.7072 20.3164 24.714C19.4812 24.7169 18.9387 25.4699 19.2462 26.1949C19.4273 26.6226 19.772 26.8707 20.24 26.8736C22.0849 26.8842 23.9287 26.8929 25.7735 26.8649C26.5578 26.8524 27.2707 26.5637 27.9111 26.1061C30.0957 24.545 32.2862 22.9916 34.4698 21.4296C34.9036 21.1197 35.3687 21 35.8847 21.1467C36.4615 21.3099 36.8345 21.696 36.9579 22.2695C37.0901 22.8845 36.909 23.4251 36.388 23.8074C35.3902 24.5411 34.3807 25.2614 33.3711 25.9796C31.6888 27.1777 30.0105 28.3826 28.3155 29.5623C26.5148 30.8155 24.5103 31.4266 22.2964 31.3725C21.1625 31.3455 20.0256 31.3686 18.8897 31.3686Z" fill="#2B467D"/>
      </g>
      <defs>
      <clipPath id="clip0_155_1842">
      <rect width="37" height="37" fill="white"/>
      </clipPath>
      </defs>
      </svg>
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary" className='mt-3'>
      Income
      </Typography>
      <Typography variant="h5" component="div">
      {income}
      </Typography>
      </CardContent>
      </Col>
      </Row>
      
      
      
      </>
      );
    };
    
    export default Starter;
    