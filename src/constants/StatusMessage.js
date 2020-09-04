import React, { Fragment } from "react";
import Status from "./Status";
import Icon from "../components/Icon/Icon";

import style from "../components/Message/Message.scss"

const StatusMessage = {
  [Status.EMPTY]: <p className={style["message__text"]}>Solte sua foto aqui ou toque para selecionar.</p>,
  [Status.LOADING]:<Icon name="loading" size={48}/>,
  [Status.DRAGOVER]: (
    <Fragment>
      <Icon name="upload" size={48}/>
      <p className={style["message__text"]}>Solte sua foto</p>
    </Fragment>
  ),
  [Status.INVALID_FILE_TYPE]: (
    <Fragment>
      <p className={style["message__text"]}>Apenas imagens permitidas.</p>
      <p className={style["message__text"]}>Solte sua foto aqui ou toque para selecionar.</p>
    </Fragment>
  ),
  [Status.INVALID_IMAGE_SIZE]: (
    <Fragment>
      <p className={style["message__text"]}>Sua foto deve ter mais de 350 px.</p>
      <p className={style["message__text"]}>Solte sua foto aqui ou toque para selecionar.</p>
    </Fragment>
  ),
  [Status.LOADED]: null
};

export default StatusMessage;
