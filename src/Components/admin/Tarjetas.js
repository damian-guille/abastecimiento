import React from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import TarjetaCerrada from "./TarjetaCerrada";
import TarjetaAbierta from "./TarjetaAbierta";

class Tarjetas extends React.Component {
  constructor() {
    super();
    this.cambiarEstado = this.cambiarEstado.bind(this);
    this.state = { expanded: null, estado: null };
  }

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false
    });
  };

  cambiarEstado = nuevoEstado => {
    this.setState({
      estado: nuevoEstado
    });
  };

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    return (
      <div>
        <ExpansionPanel
          expanded={expanded === "panel1"}
          onChange={this.handleChange("panel1")}
        >
          <ExpansionPanelSummary>
            <TarjetaCerrada />
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <TarjetaAbierta cambiarEstado={this.cambiarEstado} />
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === "panel2"}
          onChange={this.handleChange("panel2")}
        >
          <ExpansionPanelSummary>
            <TarjetaCerrada />
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <TarjetaAbierta />
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

export default Tarjetas;
