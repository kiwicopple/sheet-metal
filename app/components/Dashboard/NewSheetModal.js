// import axios from 'axios'
// // import { fetchSheet } from '~/lib/Auth'
// export default class NewSheetModal extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       sheetId: '',
//       connected: null,
//       loading: false,
//     }
//     this.connectSheet = this.connectSheet.bind(this)
//   }

//   async connectSheet() {
//     try {
//       let { sheetId } = this.state
//       if (sheetId.length > 10) {
//         this.setState({
//           loading: true,
//         })
//         // let connected = await fetchSheet(sheetId)
//         this.setState({
//           loading: false,
//           connected,
//           description: connected.properties.title,
//         })
//       }
//     } catch (error) {
//       console.log('error', error)
//       this.setState({
//         loading: false,
//       })
//     }
//   }

//   render() {
//     let { sheetId, connected, loading } = this.state
//     let { onCancel, onCreate, isVisible } = this.props
//     let emitOnCancel = onCancel || (() => {})
//     let emitOnCreate = onCreate || (() => {})

//     return (
//       <div id="NewSheetModal" className="custom-modal">
//         <div className={`modal ${isVisible ? 'is-active' : ''}`}>
//           <div className="modal-background" />
//           <div className="modal-content">
//             <div className="box">
//               <div className="field">
//                 <div className="control is-expanded">
//                   <label className="label">Sheet ID</label>
//                   <input
//                     className="input"
//                     value={sheetId}
//                     onChange={e =>
//                       this.setState({
//                         sheetId: e.target.value,
//                         connected: false,
//                       })
//                     }
//                     placeholder="Enter the Sheet ID"
//                   />
//                 </div>
//               </div>
//               <div className="buttons is-right" style={{ width: '100%' }}>
//                 <button className={`button is-outlined is-dark`} onClick={() => emitOnCancel()}>
//                   Cancel
//                 </button>
//                 <button
//                   className={`button is-primary`}
//                   onClick={() => this.connectSheet()}
//                   // onClick={() =>
//                   //   emitOnCreate({
//                   //     sheetId,
//                   //     description,
//                   //     data: connected,
//                   //   })
//                   // }
//                 >
//                   <span>Connect</span>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }
import { useState } from 'react'
import { observer } from 'mobx-react'
import { useStore } from '~/util/storeProvider.js'

const NewSheetModal = props => {
  const store = useStore()
  const { newSheetModalVisible, setNewSheetModalVisible, addSheet } = store
  const [newSheetId, setSheetId] = useState('')

  const onConnectClick = () => {
    addSheet(newSheetId, '1')
    setNewSheetModalVisible(false)
  }

  return (
    <div id="NewSheetModal" className="custom-modal">
      <div className={`modal ${newSheetModalVisible ? 'is-active' : ''}`}>
        <div className="modal-background" />
        <div className="modal-content">
          <div className="box">
            <div className="field">
              <div className="control is-expanded">
                <label className="label">Sheet ID</label>
                <input
                  className="input"
                  value={newSheetId}
                  placeholder="Enter the Sheet ID"
                  onChange={e => setSheetId(e.target.value)}
                />
              </div>
            </div>
            <div className="buttons is-right" style={{ width: '100%' }}>
              <button
                className={`button is-outlined is-dark`}
                onClick={() => setNewSheetModalVisible(false)}
              >
                Cancel
              </button>
              <button className={`button is-primary`} onClick={onConnectClick}>
                <span>Connect</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default observer(NewSheetModal)
