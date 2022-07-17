import React from 'react'
import Typography from '@mui/material/Typography';
const RenderCmp = ({ children, hasValue }) => {
  return (
    <>
      {hasValue?.length ? <>{children}</> :
        <div>
          <Typography variant="h6" gutterBottom component="h6">
            地圖找不到相關資訊。
          </Typography>
          <Typography variant="body2" color="text.secondary">
            請確認你的搜尋字詞沒有任何錯別字。 嘗試新增城市、州 / 省或郵遞區號。
          </Typography>
        </div>
      }
    </>
  )
}

export default RenderCmp