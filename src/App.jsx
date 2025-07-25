import { Link, Navigate, Outlet, Route, Routes } from 'react-router-dom'
import NotFound from '~/pages/404/NotFound'
import Auth from '~/pages/Auth/Auth'
// import AccountVerification from './pages/Auth/AccountVerification'
// import { useSelector } from 'react-redux'
// import { selectCurrentUser } from '~/redux/user/userSlice'
// import Settings from '~/pages/Settings/Settings'
import './App.css'
import BookingPage from './pages/BookingPage/BookingPage'
// Cách 2 xử lý đã đăng nhập
// * Giải pháp Clean Code trong việc xác định các route nào cần đăng nhập tài khoản xong thì mới cho truy cập
// * Sử dụng <Outlet /> của react-router-dom để hiển thị các Child Route (xem cách sử dụng trong App() bên
// dưới)
// * https://reactrouter.com/en/main/components/outlet
// * Một bài hướng dẫn khá đầy đủ:
// https://www.robinwieruch.de/react-router-private-routes/
// const ProtectedRoute = ({ user }) => {
//   if ( !user ) {
//     return <Navigate to='/login' replace={true} />
//   }
//   return <Outlet />
// }

function App() {
  // const currentUser = useSelector(selectCurrentUser)

  return (
    <Routes>
      // redireact route
      <Route path='/' element={
        // Ở đây cần replace giá trị true để nó thay thế route /, có thể hiểu là route / sẽ không còn nằm
        // trong history của Browser
        // Thực hành dễ hiểu hơn bằng cách nhân Go Home từ trang 404 xong thử quay lại bằng nút back của trình
        // duyệt giữa 2 trường hợp có replace hoặc không có.
        <Navigate to={'/bookingpage'}
          replace={true}
        />
      } />
      {/* /* Protected Routes (Hiểu đơn giản trong dự án của chúng ta là những route chỉ cho truy cập sau khi
    dã login) */ }
      {/* <Route element={<ProtectedRoute user={currentUser} />}> */}
      {/* // <Outlet/> của react router dom sẽ chạy vào các child route trong này */}

      {/*  board detail */}
      <Route path='/bookingpage/' element={ <BookingPage/> }/>
      {/* // Profile userr */}
      {/* <Route path='/settings/account' element={<Settings/>} />
      <Route path='/settings/security' element={<Settings/>} />
      </Route> */}

      <Route path='/login' element={ <Auth /> }/>
      <Route path='/register' element={ <Auth /> }/>

      {/* <Route path='/account/verification' element={<AccountVerification />}/> */}
      // 404 not found page
      <Route path='*' element={ <NotFound/>}/>
    </Routes>
  )
}

export default App
