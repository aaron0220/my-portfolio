#!/usr/bin/env python3
"""
Calculate the hydraulic power output of a multi-bladed windmill.

This script estimates the hydraulic power output based on:
- Wind speed and air density
- Rotor diameter and power coefficient
- Transmission and pump efficiencies
"""

import math


def calculate_windmill_hydraulic_power(
    wind_speed: float,
    rotor_diameter: float,
    rotor_power_coefficient: float,
    transmission_efficiency: float,
    pump_volumetric_efficiency: float,
    air_density: float
) -> dict:
    """
    Calculate the hydraulic power output of a windmill.
    
    Args:
        wind_speed: Wind speed in m/s
        rotor_diameter: Rotor diameter in meters
        rotor_power_coefficient: Dimensionless coefficient (0-0.593 theoretical max)
        transmission_efficiency: Efficiency of power transmission (0-1)
        pump_volumetric_efficiency: Volumetric efficiency of pump (0-1)
        air_density: Air density in kg/m³
    
    Returns:
        Dictionary containing power calculations at each stage
    """
    
    # Calculate rotor swept area
    rotor_radius = rotor_diameter / 2
    swept_area = math.pi * rotor_radius**2
    
    # Calculate available wind power (Betz's law)
    # P_wind = 0.5 * ρ * A * V³
    wind_power = 0.5 * air_density * swept_area * wind_speed**3
    
    # Calculate mechanical power extracted by rotor
    # P_mechanical = Cp * P_wind
    mechanical_power = rotor_power_coefficient * wind_power
    
    # Calculate power after transmission losses
    # P_transmission = η_transmission * P_mechanical
    transmission_power = transmission_efficiency * mechanical_power
    
    # Calculate hydraulic power output
    # P_hydraulic = η_pump * P_transmission
    hydraulic_power = pump_volumetric_efficiency * transmission_power
    
    # Calculate overall efficiency
    overall_efficiency = (rotor_power_coefficient * 
                         transmission_efficiency * 
                         pump_volumetric_efficiency)
    
    return {
        "swept_area": swept_area,
        "wind_power": wind_power,
        "mechanical_power": mechanical_power,
        "transmission_power": transmission_power,
        "hydraulic_power": hydraulic_power,
        "overall_efficiency": overall_efficiency
    }


def main():
    """Main function to calculate windmill hydraulic power output."""
    
    # Given parameters
    wind_speed = 3.0  # m/s
    rotor_diameter = 6.0  # meters
    rotor_power_coefficient = 0.3
    transmission_efficiency = 0.9  # 90%
    pump_volumetric_efficiency = 0.9  # 90%
    air_density = 1.2  # kg/m³
    
    print("=== Multi-Bladed Windmill Hydraulic Power Calculator ===\n")
    print("Input Parameters:")
    print(f"  Wind speed: {wind_speed} m/s")
    print(f"  Rotor diameter: {rotor_diameter} m")
    print(f"  Rotor power coefficient (Cp): {rotor_power_coefficient}")
    print(f"  Transmission efficiency: {transmission_efficiency * 100}%")
    print(f"  Pump volumetric efficiency: {pump_volumetric_efficiency * 100}%")
    print(f"  Air density: {air_density} kg/m³")
    print()
    
    # Calculate power output
    results = calculate_windmill_hydraulic_power(
        wind_speed,
        rotor_diameter,
        rotor_power_coefficient,
        transmission_efficiency,
        pump_volumetric_efficiency,
        air_density
    )
    
    print("Calculation Results:")
    print(f"  Rotor swept area: {results['swept_area']:.2f} m²")
    print(f"  Available wind power: {results['wind_power']:.2f} W")
    print(f"  Mechanical power (at rotor): {results['mechanical_power']:.2f} W")
    print(f"  Power after transmission: {results['transmission_power']:.2f} W")
    print(f"  Hydraulic power output: {results['hydraulic_power']:.2f} W")
    print(f"  Overall efficiency: {results['overall_efficiency'] * 100:.1f}%")
    print()
    
    # Additional useful information
    print("Additional Information:")
    print(f"  Energy density in wind: {results['wind_power'] / results['swept_area']:.2f} W/m²")
    print(f"  Tip speed ratio (typical for multi-blade): ~1-2")
    print(f"  Note: Multi-bladed windmills are optimized for high torque at low wind speeds")


if __name__ == "__main__":
    main()