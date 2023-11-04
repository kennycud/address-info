import React, { useCallback, useEffect } from 'react'
import { setUser } from '../globalState/authSlice'
import { useDispatch } from 'react-redux'

export const GlobalWrapper = ({ children }) => {
  const dispatch = useDispatch()
  const establishUserWalletInfo = useCallback(async () => {
    try {
      const info = await qortalRequestWithTimeout({
        action: 'GET_USER_WALLET_INFO',
        coin: 'LTC'
      }, 600000)

      dispatch(setUser({ walletInfo: info }))
    } catch (error) {
      console.error(error)
    }
  }, [])

  useEffect(() => {
    establishUserWalletInfo()
  }, [])

  return <>{children}</>
}
