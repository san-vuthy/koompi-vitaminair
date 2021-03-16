import React from "react"
import { useQuery } from "@apollo/client"
import { GET_INITATION } from "../../graphql/query"
import { Modal } from "antd"
import Output from "editorjs-react-renderer"
const ShowModalActivities = ({ cancel, id, title, des, show }) => {
  const { loading, error, data } = useQuery(GET_INITATION, {
    variables: { id },
  })
  const result = <Output data={JSON.parse(des)} />
  return (
    <React.Fragment>
      <Modal
        centered
        width={1000}
        footer={null}
        title={title}
        visible={show}
        onCancel={cancel}
      >
        {result}
      </Modal>
    </React.Fragment>
  )
}

export default ShowModalActivities
