import {F1Parser} from '../F1Parser';

export class LobbyInfoDataParser extends F1Parser {
  constructor(packetFormat: number) {
    super();
    this.uint8('m_aiControlled').uint8('m_teamId').uint8('m_nationality');

    if (packetFormat === 2023 || packetFormat === 2024) {
      this.uint8('m_platform');
    }

    this.string('m_name', {length: 32, stripNull: true})
      .uint8('m_carNumber')
      .uint8('m_yourTelemetry')
      .uint8('m_showOnlineNames')
      .uint16('m_showOnlineNames')
      .uint8('m_readyStatus');
  }
}
