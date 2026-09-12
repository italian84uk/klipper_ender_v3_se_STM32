import { useState } from 'react';

type Step = {
  id: number;
  title: string;
  icon: string;
  content: React.ReactNode;
};

function CodeBlock({ children, language = 'bash' }: { children: string; language?: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="relative group my-4">
      <div className="absolute top-2 right-2 flex items-center gap-2">
        <span className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded">{language}</span>
        <button
          onClick={handleCopy}
          className="text-xs bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded transition-colors"
        >
          {copied ? '✓ Copied' : 'Copy'}
        </button>
      </div>
      <pre className="bg-gray-900 text-green-400 p-4 pt-10 rounded-lg overflow-x-auto text-sm font-mono border border-gray-700">
        <code>{children}</code>
      </pre>
    </div>
  );
}

function Warning({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-4 rounded-r-lg">
      <div className="flex items-start gap-3">
        <span className="text-amber-500 text-xl">⚠️</span>
        <div className="text-amber-800 text-sm">{children}</div>
      </div>
    </div>
  );
}

function Info({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4 rounded-r-lg">
      <div className="flex items-start gap-3">
        <span className="text-blue-500 text-xl">ℹ️</span>
        <div className="text-blue-800 text-sm">{children}</div>
      </div>
    </div>
  );
}

function Tip({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-green-50 border-l-4 border-green-500 p-4 my-4 rounded-r-lg">
      <div className="flex items-start gap-3">
        <span className="text-green-500 text-xl">💡</span>
        <div className="text-green-800 text-sm">{children}</div>
      </div>
    </div>
  );
}

function PinDiagram() {
  return (
    <div className="my-6 bg-gray-50 p-6 rounded-xl border border-gray-200">
      <h4 className="font-bold text-gray-800 mb-4 text-center">ST-Link V2 ↔ Ender 3 V3 SE Board Pinout</h4>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        {/* ST-Link V2 */}
        <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg">
          <div className="text-center font-bold text-sm mb-3 text-cyan-400">ST-Link V2</div>
          <div className="space-y-2 text-sm font-mono">
            <div className="flex items-center gap-2"><span className="w-3 h-3 bg-red-500 rounded-full"></span> 3.3V (Pin 1)</div>
            <div className="flex items-center gap-2"><span className="w-3 h-3 bg-orange-500 rounded-full"></span> SWDIO (Pin 2)</div>
            <div className="flex items-center gap-2"><span className="w-3 h-3 bg-black border border-gray-400 rounded-full"></span> GND (Pin 3)</div>
            <div className="flex items-center gap-2"><span className="w-3 h-3 bg-yellow-500 rounded-full"></span> SWCLK (Pin 4)</div>
            <div className="flex items-center gap-2"><span className="w-3 h-3 bg-purple-500 rounded-full"></span> NRST (Pin 5) <span className="text-gray-400 text-xs">(optional)</span></div>
          </div>
        </div>
        {/* Arrow */}
        <div className="text-4xl text-gray-400">→</div>
        {/* Board */}
        <div className="bg-green-900 text-white p-4 rounded-lg shadow-lg border-2 border-green-600">
          <div className="text-center font-bold text-sm mb-3 text-green-300">Ender 3 V3 SE Board</div>
          <div className="space-y-2 text-sm font-mono">
            <div className="flex items-center gap-2"><span className="w-3 h-3 bg-red-500 rounded-full"></span> 3.3V</div>
            <div className="flex items-center gap-2"><span className="w-3 h-3 bg-orange-500 rounded-full"></span> SWDIO</div>
            <div className="flex items-center gap-2"><span className="w-3 h-3 bg-black border border-gray-400 rounded-full"></span> GND</div>
            <div className="flex items-center gap-2"><span className="w-3 h-3 bg-yellow-500 rounded-full"></span> SWCLK</div>
            <div className="flex items-center gap-2"><span className="w-3 h-3 bg-purple-500 rounded-full"></span> NRST <span className="text-gray-400 text-xs">(optional)</span></div>
          </div>
        </div>
      </div>
      <div className="mt-4 text-center text-xs text-gray-500">
        SWD pins are typically located near the STM32F103 chip. Look for a small header labeled "SWD" or test pads.
      </div>
    </div>
  );
}

const steps: Step[] = [
  {
    id: 1,
    title: "Prerequisites & Hardware",
    icon: "📦",
    content: (
      <div className="space-y-4">
        <p className="text-gray-700">Before starting, make sure you have all the required hardware and software ready.</p>
        
        <h3 className="font-bold text-lg text-gray-800 mt-6">Required Hardware</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>ST-Link V2</strong> programmer (clone versions work fine, ~$3-5)</li>
          <li><strong>Raspberry Pi</strong> (3B+, 4, or 5) — or any Debian-based Linux system</li>
          <li><strong>MicroSD card</strong> (8GB+, for Raspberry Pi OS)</li>
          <li><strong>USB cable</strong> (USB-A to USB-B/C for connecting Pi to printer)</li>
          <li><strong>Jumper wires</strong> (female-to-female, 4-5 wires needed)</li>
          <li><strong>Ender 3 V3 SE</strong> 3D printer</li>
        </ul>

        <h3 className="font-bold text-lg text-gray-800 mt-6">Required Software</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>STM32CubeProgrammer</strong> (for flashing via ST-Link) — or OpenOCD on Linux</li>
          <li><strong>KIAUH</strong> (Klipper Installation And Update Helper)</li>
          <li><strong>MainsailOS</strong> or <strong>FluiddPi</strong> for the Raspberry Pi</li>
        </ul>

        <Warning>
          <strong>Important:</strong> The Ender 3 V3 SE mainboard (CR4NS200320C13) uses either an <strong>STM32F103</strong> or <strong>GD32F303RET6</strong> (a GigaDevice clone). Check the chip marking on your board. If you have the GD32 variant, you'll need to enable "Disable SWD at startup" in the firmware config.
        </Warning>

        <Info>
          <strong>Why use ST-Link V2?</strong> The ST-Link V2 connects via SWD (Serial Wire Debug) pins directly to the MCU. This is the most reliable method to flash firmware, especially when the SD card method fails or when you need to flash a custom bootloader (like CanBoot/Katapult) for future wireless updates.
        </Info>
      </div>
    ),
  },
  {
    id: 2,
    title: "Set Up Raspberry Pi (Klipper Host)",
    icon: "🍓",
    content: (
      <div className="space-y-4">
        <p className="text-gray-700">First, set up your Raspberry Pi as the Klipper host computer.</p>

        <h3 className="font-bold text-lg text-gray-800">Option A: Flash MainsailOS (Recommended)</h3>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>Download <strong>MainsailOS</strong> from the official GitHub releases</li>
          <li>Flash it to your MicroSD card using <strong>Raspberry Pi Imager</strong> or <strong>Balena Etcher</strong></li>
          <li>Before booting, create a <code className="bg-gray-100 px-1 rounded">wpa_supplicant.conf</code> file in the boot partition with your WiFi credentials</li>
          <li>Insert the SD card into the Pi and power it on</li>
          <li>Find the Pi's IP address from your router</li>
        </ol>

        <CodeBlock>{`# wpa_supplicant.conf content
country=US
ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
update_config=1
network={
    ssid="YourWiFiName"
    psk="YourWiFiPassword"
}`}</CodeBlock>

        <h3 className="font-bold text-lg text-gray-800 mt-6">Option B: Install via KIAUH (Manual)</h3>
        <p className="text-gray-700">If you prefer a clean Debian/Raspberry Pi OS install:</p>
        <CodeBlock>{`# SSH into your Pi
ssh pi@<your-pi-ip>

# Install KIAUH
cd ~
git clone https://github.com/dw-0/KIAUH.git

# Run KIAUH
cd KIAUH
./kiauh.sh

# From the KIAUH menu, install:
# 1. Klipper
# 2. Moonraker
# 3. Mainsail (or Fluidd)`}</CodeBlock>

        <Tip>
          MainsailOS comes with everything pre-configured. If you're new to this, use Option A to save time.
        </Tip>
      </div>
    ),
  },
  {
    id: 3,
    title: "Locate SWD Pins on the Board",
    icon: "🔌",
    content: (
      <div className="space-y-4">
        <p className="text-gray-700">You need to find the SWD debug pins on your Ender 3 V3 SE mainboard to connect the ST-Link V2.</p>

        <Warning>
          <strong>SAFETY FIRST:</strong> Disconnect the printer from ALL power sources before working on the mainboard. Remove any connected cables.
        </Warning>

        <h3 className="font-bold text-lg text-gray-800">Finding the SWD Header</h3>
        <p className="text-gray-700">On the Ender 3 V3 SE board (CR4NS200320C13), the SWD pins are typically located:</p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Near the <strong>STM32F103</strong> chip (the large square IC)</li>
          <li>Look for a small <strong>4-pin or 5-pin header</strong> labeled "SWD", "DEBUG", or "JTAG"</li>
          <li>Some boards have <strong>test pads</strong> instead of a header — you may need to solder pins</li>
          <li>The pins should be labeled: <strong>SWDIO</strong>, <strong>SWCLK</strong>, <strong>GND</strong>, and <strong>3.3V</strong></li>
        </ul>

        <PinDiagram />

        <h3 className="font-bold text-lg text-gray-800">Connection Table</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse border border-gray-300 rounded-lg overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">ST-Link V2 Pin</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Board Pin</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Wire Color (suggested)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white"><td className="border border-gray-300 px-4 py-2">3.3V (Pin 1)</td><td className="border border-gray-300 px-4 py-2">3.3V</td><td className="border border-gray-300 px-4 py-2">🔴 Red</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-300 px-4 py-2">SWDIO (Pin 2)</td><td className="border border-gray-300 px-4 py-2">SWDIO</td><td className="border border-gray-300 px-4 py-2">🟠 Orange</td></tr>
              <tr className="bg-white"><td className="border border-gray-300 px-4 py-2">GND (Pin 3)</td><td className="border border-gray-300 px-4 py-2">GND</td><td className="border border-gray-300 px-4 py-2">⚫ Black</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-300 px-4 py-2">SWCLK (Pin 4)</td><td className="border border-gray-300 px-4 py-2">SWCLK</td><td className="border border-gray-300 px-4 py-2">🟡 Yellow</td></tr>
              <tr className="bg-white"><td className="border border-gray-300 px-4 py-2">NRST (Pin 5)</td><td className="border border-gray-300 px-4 py-2">NRST</td><td className="border border-gray-300 px-4 py-2">🟣 Purple (optional)</td></tr>
            </tbody>
          </table>
        </div>

        <Warning>
          <strong>DO NOT connect the 5V pin!</strong> The STM32F103 operates at 3.3V. Connecting 5V will damage the chip. Only use the 3.3V pin from the ST-Link for reference — you can also power the board from the printer's own power supply.
        </Warning>

        <Tip>
          If your board doesn't have a labeled SWD header, look for the STM32F103 datasheet pinout. SWDIO is typically on pin PA13 and SWCLK on PA14. You may find small test pads near the chip.
        </Tip>
      </div>
    ),
  },
  {
    id: 4,
    title: "Compile Klipper Firmware",
    icon: "⚙️",
    content: (
      <div className="space-y-4">
        <p className="text-gray-700">SSH into your Raspberry Pi and compile the Klipper firmware for the Ender 3 V3 SE.</p>

        <CodeBlock>{`# SSH into your Raspberry Pi
ssh pi@<your-pi-ip>

# Navigate to the Klipper directory
cd ~/klipper

# Open the firmware configuration menu
make menuconfig`}</CodeBlock>

        <h3 className="font-bold text-lg text-gray-800 mt-6">Configuration Settings</h3>
        <p className="text-gray-700 mb-3">Set the following options in <code className="bg-gray-100 px-1 rounded">make menuconfig</code>:</p>

        <div className="bg-gray-900 text-white p-4 rounded-lg font-mono text-sm space-y-1">
          <div className="text-cyan-400"># For STM32F103 variant:</div>
          <div>Micro-controller architecture: <span className="text-green-400">STMicroelectronics STM32</span></div>
          <div>Processor model: <span className="text-green-400">STM32F103</span></div>
          <div>Bootloader offset: <span className="text-green-400">28KiB bootloader</span></div>
          <div>Communication interface: <span className="text-green-400">Serial (on USART1 PA10/PA9)</span></div>
        </div>

        <div className="bg-gray-900 text-white p-4 rounded-lg font-mono text-sm space-y-1 mt-4">
          <div className="text-cyan-400"># For GD32F303RET6 variant (GigaDevice clone):</div>
          <div>Micro-controller architecture: <span className="text-green-400">STMicroelectronics STM32</span></div>
          <div>Processor model: <span className="text-green-400">STM32F103</span></div>
          <div><span className="text-yellow-400">[*] Disable SWD at startup (for GigaDevice stm32f103 clones)</span></div>
          <div>Bootloader offset: <span className="text-green-400">28KiB bootloader</span></div>
          <div>Communication interface: <span className="text-green-400">Serial (on USART1 PA10/PA9)</span></div>
        </div>

        <Warning>
          <strong>Important:</strong> If you're using ST-Link V2 to flash directly (without the 28KiB bootloader), select <strong>"No bootloader"</strong> instead. The 28KiB bootloader option is for SD card flashing. For direct ST-Link flashing, use "No bootloader" or flash a bootloader first (see Step 5).
        </Warning>

        <h3 className="font-bold text-lg text-gray-800 mt-6">Build the Firmware</h3>
        <CodeBlock>{`# Exit menuconfig (save with 'Y')
# Then compile:
make

# The compiled firmware will be at:
# ~/klipper/out/klipper.bin`}</CodeBlock>

        <Info>
          If you get compilation errors, run <code className="bg-gray-100 px-1 rounded">make clean</code> first, then <code className="bg-gray-100 px-1 rounded">make menuconfig</code> again and rebuild.
        </Info>
      </div>
    ),
  },
  {
    id: 5,
    title: "Flash Firmware via ST-Link V2",
    icon: "🔧",
    content: (
      <div className="space-y-4">
        <p className="text-gray-700">Now flash the compiled Klipper firmware directly to the MCU using the ST-Link V2.</p>

        <Warning>
          <strong>Before flashing:</strong> Ensure the ST-Link V2 is connected to the board's SWD pins AND the board is powered (either from the printer's PSU or the ST-Link's 3.3V). Double-check all connections.
        </Warning>

        <h3 className="font-bold text-lg text-gray-800">Method A: Using OpenOCD (Linux/Raspberry Pi)</h3>
        <p className="text-gray-700">This is the recommended method if you're using a Raspberry Pi or Linux computer.</p>

        <CodeBlock>{`# Install OpenOCD
sudo apt update
sudo apt install openocd

# Connect ST-Link V2 to your Pi via USB
# Verify it's detected:
lsusb
# You should see something like: "STMicroelectronics ST-LINK/V2"`}</CodeBlock>

        <p className="text-gray-700 mt-4">Create an OpenOCD configuration file:</p>
        <CodeBlock language="cfg">{`# Create file: ~/openocd_stlink.cfg

# ST-Link V2 interface
source [find interface/stlink.cfg]
transport select hla_swd

# STM32F103 target
source [find target/stm32f1x.cfg]

# Adapter speed
adapter speed 4000

# Reset config
reset_config srst_only`}</CodeBlock>

        <CodeBlock>{`# Flash the firmware using OpenOCD
sudo openocd -f ~/openocd_stlink.cfg -c "program ~/klipper/out/klipper.bin verify reset exit 0x08000000"`}</CodeBlock>

        <p className="text-gray-700 mt-4">If you want to flash a bootloader first (recommended for future SD card updates):</p>
        <CodeBlock>{`# First, backup existing firmware (optional but recommended)
sudo openocd -f ~/openocd_stlink.cfg -c "init; halt; dump_image backup.bin 0x08000000 0x40000; exit"

# Flash the HID bootloader (for future USB updates)
# Download the bootloader first:
cd ~/klipper
git clone https://github.com/Serasidis/STM32_HID_Bootloader.git

# Flash it at address 0x08000000
sudo openocd -f ~/openocd_stlink.cfg -c "init; halt; stm32f1x mass_erase 0; program STM32_HID_Bootloader/binaries/hid_generic_pc13.bin verify 0x08000000; exit"

# Then flash klipper at offset 0x08007000 (28KiB = 0x7000 offset)
sudo openocd -f ~/openocd_stlink.cfg -c "program ~/klipper/out/klipper.bin verify reset exit 0x08007000"`}</CodeBlock>

        <h3 className="font-bold text-lg text-gray-800 mt-6">Method B: Using STM32CubeProgrammer (Windows/Mac/Linux)</h3>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>Download and install <strong>STM32CubeProgrammer</strong> from ST's website</li>
          <li>Connect the ST-Link V2 to your computer via USB</li>
          <li>Connect the ST-Link V2 to the board's SWD pins</li>
          <li>Power the board (from printer PSU or ST-Link 3.3V)</li>
          <li>Open STM32CubeProgrammer</li>
          <li>On the right panel, select <strong>"ST-LINK"</strong> as connection type</li>
          <li>Click <strong>"Connect"</strong></li>
          <li>Go to the <strong>"Erasing & Programming"</strong> tab</li>
          <li>Browse to your <code className="bg-gray-100 px-1 rounded">klipper.bin</code> file</li>
          <li>Set start address to <strong>0x08000000</strong> (for no bootloader) or <strong>0x08007000</strong> (with 28KiB bootloader)</li>
          <li>Check <strong>"Run after programming"</strong></li>
          <li>Click <strong>"Start Programming"</strong></li>
        </ol>

        <Tip>
          <strong>STM32CubeProgrammer tip:</strong> Set the connection mode to <strong>"Connect Under Reset"</strong> if you have trouble connecting. This ensures the MCU is held in reset during connection.
        </Tip>

        <h3 className="font-bold text-lg text-gray-800 mt-6">Method C: Using st-link tools (Linux CLI)</h3>
        <CodeBlock>{`# Install stlink tools
sudo apt install stlink-tools

# Erase the chip
st-flash erase

# Flash klipper.bin at the start of flash memory
st-flash write ~/klipper/out/klipper.bin 0x08000000

# Or with 28KiB bootloader offset:
st-flash write ~/klipper/out/klipper.bin 0x08007000`}</CodeBlock>
      </div>
    ),
  },
  {
    id: 6,
    title: "Configure printer.cfg",
    icon: "📝",
    content: (
      <div className="space-y-4">
        <p className="text-gray-700">Now configure Klipper to communicate with your printer. You'll need to set up the <code className="bg-gray-100 px-1 rounded">printer.cfg</code> file.</p>

        <h3 className="font-bold text-lg text-gray-800">Find the Serial Port</h3>
        <p className="text-gray-700">Connect the printer to the Pi via USB and find the serial port:</p>
        <CodeBlock>{`# Connect printer to Pi via USB cable, then:
ls /dev/serial/by-id/*
# You should see something like:
# /dev/serial/by-id/usb-1a86_USB_Serial-if00-port0`}</CodeBlock>

        <Info>
          If you flashed with "No bootloader" via ST-Link, the printer connects via USB serial. If you flashed with a bootloader, you may need to use the bootloader's method (e.g., Katapult/CanBoot UUID).
        </Info>

        <h3 className="font-bold text-lg text-gray-800 mt-6">Download a Pre-made Config</h3>
        <p className="text-gray-700">Use one of these community-maintained configs as a starting point:</p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><a href="https://github.com/bootuz-dinamon/ender3-v3-se-full-klipper" className="text-blue-600 hover:underline font-medium" target="_blank" rel="noopener">bootuz-dinamon/ender3-v3-se-full-klipper</a> — Full config with driver section</li>
          <li><a href="https://github.com/0xD34D/ender3-v3-se-klipper-config" className="text-blue-600 hover:underline font-medium" target="_blank" rel="noopener">0xD34D/ender3-v3-se-klipper-config</a> — Config with PRtouch support</li>
        </ul>

        <h3 className="font-bold text-lg text-gray-800 mt-6">Basic printer.cfg Template</h3>
        <CodeBlock language="ini">{`# Ender 3 V3 SE - Basic printer.cfg
# Adjust serial path to match your setup

[mcu]
serial: /dev/serial/by-id/usb-1a86_USB_Serial-if00-port0
restart_method: command

[printer]
kinematics: cartesian
max_velocity: 300
max_accel: 3000
max_z_velocity: 15
max_z_accel: 100

[stepper_x]
step_pin: PC2
dir_pin: !PB9
enable_pin: !PC3
microsteps: 16
rotation_distance: 40
endstop_pin: ^PA5
position_min: 0
position_endstop: 0
position_max: 220
homing_speed: 50

[stepper_y]
step_pin: PB8
dir_pin: !PB7
enable_pin: !PC3
microsteps: 16
rotation_distance: 40
endstop_pin: ^PA6
position_min: 0
position_endstop: 0
position_max: 220
homing_speed: 50

[stepper_z]
step_pin: PB6
dir_pin: !PB5
enable_pin: !PC3
microsteps: 16
rotation_distance: 8
endstop_pin: probe:z_virtual_endstop
position_min: -2
position_max: 250
homing_speed: 4

[extruder]
step_pin: PB4
dir_pin: !PB3
enable_pin: !PC3
microsteps: 16
rotation_distance: 30.394
nozzle_diameter: 0.400
filament_diameter: 1.750
heater_pin: PA1
sensor_type: EPCOS 100K B57560G104F
sensor_pin: PC5
control: pid
pid_Kp: 21.527
pid_Ki: 1.063
pid_Kd: 108.982
min_temp: 0
max_temp: 260

[heater_bed]
heater_pin: PB10
sensor_type: EPCOS 100K B57560G104F
sensor_pin: PC4
control: pid
pid_Kp: 54.027
pid_Ki: 0.770
pid_Kd: 948.182
min_temp: 0
max_temp: 100

[fan]
pin: PA0

# IMPORTANT: Use the community config for accurate pin mappings!
# This is just a template - actual pins may differ.`}</CodeBlock>

        <Warning>
          <strong>Pin mappings vary!</strong> The above is a rough template. Always use the community-verified config files linked above, as pin assignments for the CR4NS200320C13 board are specific. Incorrect pin configuration can damage your hardware.
        </Warning>

        <h3 className="font-bold text-lg text-gray-800 mt-6">Upload to Mainsail/Fluidd</h3>
        <p className="text-gray-700">Upload your printer.cfg through the web interface:</p>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>Open <code className="bg-gray-100 px-1 rounded">http://&lt;your-pi-ip&gt;</code> in a browser</li>
          <li>Go to the <strong>Machine</strong> tab</li>
          <li>Open <code className="bg-gray-100 px-1 rounded">printer.cfg</code></li>
          <li>Paste the config contents</li>
          <li>Click <strong>Save & Restart</strong></li>
        </ol>
      </div>
    ),
  },
  {
    id: 7,
    title: "Verify & Test",
    icon: "✅",
    content: (
      <div className="space-y-4">
        <p className="text-gray-700">Verify that Klipper is communicating with your printer correctly.</p>

        <h3 className="font-bold text-lg text-gray-800">Check Connection</h3>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>Power on the Ender 3 V3 SE</li>
          <li>Ensure the USB cable is connected between the printer and Pi</li>
          <li>Open the Mainsail/Fluidd web interface</li>
          <li>Check that the status shows <strong>"Ready"</strong> (not "MCU error")</li>
        </ol>

        <h3 className="font-bold text-lg text-gray-800 mt-6">Verify MCU Connection via SSH</h3>
        <CodeBlock>{`# SSH into your Pi and check:
ls /dev/serial/by-id/*

# Check Klipper service status
sudo systemctl status klipper

# View Klipper logs for errors
cat /tmp/klippy.log | tail -50`}</CodeBlock>

        <h3 className="font-bold text-lg text-gray-800 mt-6">Test Movements</h3>
        <p className="text-gray-700">In the Mainsail console, test basic movements:</p>
        <CodeBlock language="gcode">{`# Test homing
G28

# Test X movement (10mm)
G1 X10 F3000

# Test Y movement (10mm)
G1 Y10 F3000

# Test Z movement (1mm)
G1 Z1 F300

# Test extrusion (5mm at slow speed)
M83
G1 E5 F100`}</CodeBlock>

        <Warning>
          <strong>Keep your hand near the power switch!</strong> During the first test, be ready to turn off the printer if motors move in the wrong direction or make unusual noises.
        </Warning>

        <h3 className="font-bold text-lg text-gray-800 mt-6">Calibration Steps</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>PID tune hotend:</strong> <code className="bg-gray-100 px-1 rounded">PID_CALIBRATE HEATER=extruder TARGET=200</code></li>
          <li><strong>PID tune bed:</strong> <code className="bg-gray-100 px-1 rounded">PID_CALIBRATE HEATER=heater_bed TARGET=60</code></li>
          <li><strong>E-steps calibration:</strong> Extrude 100mm of filament and measure actual vs requested</li>
          <li><strong>Bed mesh:</strong> Run <code className="bg-gray-100 px-1 rounded">BED_MESH_CALIBRATE</code></li>
          <li><strong>Input shaper:</strong> Use an accelerometer for resonance testing</li>
        </ul>

        <Tip>
          <strong>Known limitations:</strong> The built-in screen will show a screensaver after flashing Klipper (it won't work normally). Auto Z-offset probing (PRtouch) requires a special Klipper fork by 0xD34D.
        </Tip>
      </div>
    ),
  },
  {
    id: 8,
    title: "Troubleshooting",
    icon: "🔍",
    content: (
      <div className="space-y-4">
        <p className="text-gray-700">Common issues and solutions when installing Klipper on the Ender 3 V3 SE.</p>

        <div className="space-y-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-bold text-red-700">❌ "MCU: Unable to connect"</h4>
            <ul className="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
              <li>Check the serial path in printer.cfg matches <code className="bg-gray-100 px-1 rounded">ls /dev/serial/by-id/*</code></li>
              <li>Verify the USB cable is a data cable (not charge-only)</li>
              <li>Restart Klipper: <code className="bg-gray-100 px-1 rounded">sudo systemctl restart klipper</code></li>
              <li>Check if firmware was actually flashed (the screen should show screensaver, not normal UI)</li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-bold text-red-700">❌ ST-Link can't connect to MCU</h4>
            <ul className="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
              <li>Verify SWDIO and SWCLK are not swapped</li>
              <li>Ensure the board is powered</li>
              <li>Try "Connect Under Reset" mode in STM32CubeProgrammer</li>
              <li>Check wire connections are solid (use short jumper wires)</li>
              <li>Try lowering adapter speed: <code className="bg-gray-100 px-1 rounded">adapter speed 1000</code></li>
              <li>If using a GD32 clone, ensure you're not trying to use SWD after it's been disabled</li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-bold text-red-700">❌ SD card flash doesn't work</h4>
            <ul className="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
              <li>Format SD card as <strong>FAT32</strong> with <strong>4096-byte</strong> allocation unit size</li>
              <li>Use a small SD card (≤32GB, preferably ≤8GB)</li>
              <li>Rename the file to <code className="bg-gray-100 px-1 rounded">firmware.bin</code> or <code className="bg-gray-100 px-1 rounded">firmware.cur</code></li>
              <li>Power off → insert SD → power on → wait 2-3 minutes</li>
              <li>Remove SD card after flashing</li>
              <li>The SD card slot on these boards can be finicky — clean it with compressed air</li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-bold text-red-700">❌ GD32F303 won't flash / firmware doesn't stick</h4>
            <ul className="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
              <li>Enable <code className="bg-gray-100 px-1 rounded">[*] Disable SWD at startup</code> in menuconfig</li>
              <li>Try reformatting SD card with exact 4096-byte cluster size</li>
              <li>Some GD32 chips are more finicky — try flashing multiple times</li>
              <li>Use ST-Link V2 for the most reliable flash method</li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-bold text-red-700">❌ Motors move wrong direction</h4>
            <ul className="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
              <li>Add or remove <code className="bg-gray-100 px-1 rounded">!</code> before the dir_pin in printer.cfg</li>
              <li>Example: change <code className="bg-gray-100 px-1 rounded">dir_pin: PB9</code> to <code className="bg-gray-100 px-1 rounded">dir_pin: !PB9</code></li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-bold text-red-700">❌ Need to restore stock firmware</h4>
            <ul className="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
              <li>Download stock Marlin firmware from Creality's website</li>
              <li>Place the .bin file on a formatted SD card</li>
              <li>Insert into printer and power on</li>
              <li>If SD method doesn't work, use ST-Link V2 to flash stock firmware directly</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
];

function Sidebar({ currentStep, onStepClick }: { currentStep: number; onStepClick: (step: number) => void }) {
  return (
    <nav className="hidden lg:block w-72 bg-white border-r border-gray-200 overflow-y-auto sticky top-0 h-screen">
      <div className="p-6">
        <h2 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Steps</h2>
        <ul className="space-y-1">
          {steps.map((step) => (
            <li key={step.id}>
              <button
                onClick={() => onStepClick(step.id)}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all flex items-center gap-2 ${
                  currentStep === step.id
                    ? 'bg-blue-50 text-blue-700 font-medium border border-blue-200'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <span className="text-base">{step.icon}</span>
                <span>{step.title}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default function App() {
  const [currentStep, setCurrentStep] = useState(1);

  const scrollToStep = (stepId: number) => {
    setCurrentStep(stepId);
    const element = document.getElementById(`step-${stepId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-xl">🖨️</div>
              <div>
                <h1 className="text-lg font-bold">Klipper Installation Guide</h1>
                <p className="text-xs text-gray-400">Ender 3 V3 SE + ST-Link V2</p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-4 text-sm">
              <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-medium">STM32F103</span>
              <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-xs font-medium">SWD Flash</span>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <Sidebar currentStep={currentStep} onStepClick={scrollToStep} />

        {/* Main Content */}
        <main className="flex-1 max-w-4xl mx-auto px-4 py-8 lg:px-8">
          {/* Hero Section */}
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 mb-8 text-white shadow-xl">
            <h2 className="text-3xl font-bold mb-3">Install Klipper on Ender 3 V3 SE</h2>
            <p className="text-blue-100 text-lg mb-4">
              Complete step-by-step guide using an ST-Link V2 programmer to flash Klipper firmware directly to your printer's mainboard.
            </p>
            <div className="flex flex-wrap gap-3 mt-4">
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">⏱️ ~2-3 hours</span>
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">🔧 Intermediate</span>
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">📟 ST-Link V2 Required</span>
            </div>
          </div>

          {/* Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
              <div className="text-3xl mb-2">🎯</div>
              <h3 className="font-bold text-gray-800">Why ST-Link V2?</h3>
              <p className="text-sm text-gray-600 mt-1">Most reliable method to flash firmware. Bypasses SD card issues and allows direct MCU access.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
              <div className="text-3xl mb-2">⚡</div>
              <h3 className="font-bold text-gray-800">Benefits</h3>
              <p className="text-sm text-gray-600 mt-1">Faster prints, input shaping, pressure advance, web interface control, and more.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
              <div className="text-3xl mb-2">🔄</div>
              <h3 className="font-bold text-gray-800">Reversible</h3>
              <p className="text-sm text-gray-600 mt-1">You can always restore stock firmware via ST-Link or SD card method.</p>
            </div>
          </div>

          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step) => (
              <section
                key={step.id}
                id={`step-${step.id}`}
                className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden scroll-mt-20"
              >
                <div className="bg-gray-50 border-b border-gray-200 px-6 py-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.id}
                  </span>
                  <h2 className="text-xl font-bold text-gray-800">
                    <span className="mr-2">{step.icon}</span>
                    {step.title}
                  </h2>
                </div>
                <div className="px-6 py-6">
                  {step.content}
                </div>
              </section>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-between mt-8 mb-12">
            <button
              onClick={() => scrollToStep(Math.max(1, currentStep - 1))}
              disabled={currentStep === 1}
              className="px-6 py-3 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
            >
              ← Previous Step
            </button>
            <button
              onClick={() => scrollToStep(Math.min(steps.length, currentStep + 1))}
              disabled={currentStep === steps.length}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
            >
              Next Step →
            </button>
          </div>

          {/* Footer */}
          <footer className="border-t border-gray-200 pt-8 pb-12 text-center text-sm text-gray-500">
            <p className="mb-2">
              This guide is community-sourced. Always verify information against official documentation.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <a href="https://www.klipper3d.org/" target="_blank" rel="noopener" className="text-blue-600 hover:underline">Klipper Documentation</a>
              <a href="https://www.klipper3d.org/Bootloaders.html" target="_blank" rel="noopener" className="text-blue-600 hover:underline">Klipper Bootloaders Guide</a>
              <a href="https://github.com/dw-0/KIAUH" target="_blank" rel="noopener" className="text-blue-600 hover:underline">KIAUH GitHub</a>
              <a href="https://pblvsky.gitbook.io/ender3v3se/" target="_blank" rel="noopener" className="text-blue-600 hover:underline">Ender 3 V3 SE Wiki</a>
            </div>
            <p className="mt-4 text-xs text-gray-400">
              ⚠️ Flashing firmware carries risk. Proceed at your own risk. The authors are not responsible for any damage.
            </p>
          </footer>
        </main>
      </div>

      {/* Mobile Step Navigation */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3 shadow-lg z-50">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToStep(Math.max(1, currentStep - 1))}
            disabled={currentStep === 1}
            className="px-4 py-2 bg-gray-100 rounded-lg text-sm font-medium text-gray-700 disabled:opacity-50"
          >
            ← Prev
          </button>
          <span className="text-sm text-gray-500 font-medium">
            Step {currentStep} of {steps.length}
          </span>
          <button
            onClick={() => scrollToStep(Math.min(steps.length, currentStep + 1))}
            disabled={currentStep === steps.length}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium disabled:opacity-50"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}
