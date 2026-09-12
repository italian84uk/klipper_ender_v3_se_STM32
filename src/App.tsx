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

function DeviceSpecs() {
  return (
    <div className="my-6 bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-xl border border-gray-200">
      <h4 className="font-bold text-gray-800 mb-4 text-center">Samsung Galaxy Tab A 10.5 (SM-T395) Specs</h4>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        <div className="bg-white p-3 rounded-lg shadow-sm">
          <div className="text-2xl mb-1">⚡</div>
          <div className="text-xs text-gray-500">Processor</div>
          <div className="text-sm font-bold text-gray-800">Snapdragon 450</div>
          <div className="text-xs text-gray-500">Octa-core 1.8GHz</div>
        </div>
        <div className="bg-white p-3 rounded-lg shadow-sm">
          <div className="text-2xl mb-1">🧠</div>
          <div className="text-xs text-gray-500">RAM</div>
          <div className="text-sm font-bold text-gray-800">3 GB</div>
          <div className="text-xs text-gray-500">LPDDR4</div>
        </div>
        <div className="bg-white p-3 rounded-lg shadow-sm">
          <div className="text-2xl mb-1">💾</div>
          <div className="text-xs text-gray-500">Storage</div>
          <div className="text-sm font-bold text-gray-800">32 GB</div>
          <div className="text-xs text-gray-500">+ microSD</div>
        </div>
        <div className="bg-white p-3 rounded-lg shadow-sm">
          <div className="text-2xl mb-1">🔋</div>
          <div className="text-xs text-gray-500">Battery</div>
          <div className="text-sm font-bold text-gray-800">6000 mAh</div>
          <div className="text-xs text-gray-500">Micro USB</div>
        </div>
      </div>
      <div className="mt-4 text-center text-sm text-gray-600">
        <strong>Android:</strong> 8.1 Oreo → upgradable to Android 10 &nbsp;|&nbsp; <strong>Display:</strong> 10.1" 1920×1200 TFT
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
        
        <h3 className="font-bold text-lg text-gray-800 mt-6">Your Klipper Host: Samsung Galaxy Tab A 10.5 (SM-T395)</h3>
        <DeviceSpecs />

        <h3 className="font-bold text-lg text-gray-800 mt-6">Required Hardware</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>Samsung Galaxy Tab A 10.5 (SM-T395)</strong> — your Klipper host</li>
          <li><strong>ST-Link V2</strong> programmer (clone versions work fine, ~$3-5)</li>
          <li><strong>USB OTG adapter</strong> (microUSB to USB-A female) — for connecting ST-Link & printer</li>
          <li><strong>OTG + Charge cable</strong> or <strong>powered USB hub</strong> (see Step 2 for details)</li>
          <li><strong>MicroSD card</strong> (for initial firmware flash to printer, if needed)</li>
          <li><strong>USB cable</strong> (USB-A to USB-B/C for connecting printer to tablet)</li>
          <li><strong>Jumper wires</strong> (female-to-female, 4-5 wires for ST-Link)</li>
          <li><strong>Ender 3 V3 SE</strong> 3D printer</li>
        </ul>

        <Info>
          <strong>Your board: CR4NS200320C14 with GD303RET6 chip.</strong> This is a GigaDevice clone of STM32F103. You MUST enable "Disable SWD at startup" in the firmware config, or the firmware won't work after the first boot. See Step 5 for exact settings.
        </Info>

        <Info>
          <strong>Why use the Galaxy Tab as host?</strong> The SM-T395 has a 1.8GHz octa-core processor and 3GB RAM — more than enough to run Klipper. Plus, you get a built-in touchscreen display for KlipperScreen, WiFi, and a large battery for UPS-like behavior during power outages.
        </Info>

        <h3 className="font-bold text-lg text-gray-800 mt-6">Required Software (on the tablet)</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>BeamKlipper</strong> app (easiest method — no root required)</li>
          <li>OR <strong>Termux</strong> + proot-distro (advanced method — more flexible)</li>
          <li>A file manager app (for managing config files)</li>
        </ul>
      </div>
    ),
  },
  {
    id: 2,
    title: "Prepare the Tablet (OTG + Charging)",
    icon: "🔌",
    content: (
      <div className="space-y-4">
        <p className="text-gray-700">The SM-T395 has a single <strong>microUSB</strong> port. You need to use it for both OTG (connecting to the printer/ST-Link) AND charging simultaneously. This requires a special setup.</p>

        <Warning>
          <strong>CRITICAL:</strong> The SM-T395 does NOT natively support OTG + charging at the same time through a simple adapter. You need one of the solutions below.
        </Warning>

        <h3 className="font-bold text-lg text-gray-800">Solution A: Powered USB Hub (Recommended)</h3>
        <p className="text-gray-700">Use a powered microUSB OTG hub that supports simultaneous charging:</p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Purchase a <strong>microUSB OTG hub with charging port</strong> (search "micro USB OTG charging adapter" on Amazon/AliExpress)</li>
          <li>These have a microUSB female for charging + USB-A ports for peripherals</li>
          <li>Connect the hub to your tablet, plug in the charger, then connect printer/ST-Link to the USB-A ports</li>
        </ul>

        <h3 className="font-bold text-lg text-gray-800 mt-6">Solution B: Custom OTG+Charge Cable (DIY)</h3>
        <p className="text-gray-700">Build a cable that connects the ID pin to ground (enables OTG) while allowing power through:</p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>You need a microUSB cable, a <strong>resistor (typically 10kΩ)</strong>, and some soldering</li>
          <li>Connect the ID pin (pin 4) to GND through the resistor inside the microUSB connector</li>
          <li>This tells the tablet to enable OTG mode while still accepting charge</li>
        </ul>
        <Info>
          The exact resistor value varies by device. For the SM-T395, try values between <strong>1kΩ and 100kΩ</strong>. Start with 10kΩ. You may need to experiment to find the right value that allows both OTG and charging.
        </Info>

        <h3 className="font-bold text-lg text-gray-800 mt-6">Solution C: USB-C Hub via Adapter (if available)</h3>
        <p className="text-gray-700">If you have a microUSB to USB-C adapter that supports OTG passthrough, you can use a standard USB-C hub with Power Delivery passthrough.</p>

        <h3 className="font-bold text-lg text-gray-800 mt-6">Tablet Settings to Configure</h3>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>Go to <strong>Settings → Developer Options</strong> (enable by tapping Build Number 7 times)</li>
          <li>Enable <strong>USB Debugging</strong></li>
          <li>Set <strong>Stay Awake</strong> (screen won't sleep while charging)</li>
          <li>Disable <strong>Battery Optimization</strong> for BeamKlipper (Settings → Apps → BeamKlipper → Battery → Don't optimize)</li>
          <li>Disable any <strong>aggressive sleep/doze</strong> modes</li>
        </ol>

        <Tip>
          <strong>Pro tip:</strong> Run this in a terminal app (like Termux) to prevent Android from killing background processes:
          <code className="block bg-gray-100 p-2 mt-2 rounded text-sm">dumpsys deviceidle disable</code>
          Also install a "Wake Lock" app from the Play Store to keep the CPU awake during prints.
        </Tip>
      </div>
    ),
  },
  {
    id: 3,
    title: "Install Termux + proot (Full Control Method)",
    icon: "🐧",
    content: (
      <div className="space-y-4">
        <p className="text-gray-700">Set up a full Linux environment on your Galaxy Tab using Termux and proot-distro. This gives you complete control over Klipper, the ability to build firmware, SSH access, and no app restrictions.</p>

        <Warning>
          <strong>Important:</strong> Install Termux from <strong>F-Droid</strong>, NOT the Play Store. The Play Store version is outdated and broken.
        </Warning>

        <h3 className="font-bold text-lg text-gray-800">Step 1: Install Required Apps</h3>
        <ol className="list-decimal list-inside space-y-3 text-gray-700">
          <li>
            <strong>Termux</strong> — Install from <a href="https://f-droid.org/packages/com.termux/" className="text-blue-600 hover:underline font-medium" target="_blank" rel="noopener">F-Droid</a>
            <br />
            <span className="text-sm text-gray-500">Terminal emulator with Linux package management</span>
          </li>
          <li>
            <strong>Termux:API</strong> — Install from <a href="https://f-droid.org/packages/com.termux.api/" className="text-blue-600 hover:underline font-medium" target="_blank" rel="noopener">F-Droid</a>
            <br />
            <span className="text-sm text-gray-500">Provides hardware access (battery, wifi, etc.)</span>
          </li>
          <li>
            <strong>Termux:Boot</strong> — Install from <a href="https://f-droid.org/packages/com.termux.boot/" className="text-blue-600 hover:underline font-medium" target="_blank" rel="noopener">F-Droid</a>
            <br />
            <span className="text-sm text-gray-500">Enables autostart on device boot</span>
          </li>
          <li>
            <strong>Termux:Widget</strong> — Install from <a href="https://f-droid.org/packages/com.termux.widget/" className="text-blue-600 hover:underline font-medium" target="_blank" rel="noopener">F-Droid</a>
            <br />
            <span className="text-sm text-gray-500">Home screen shortcuts for scripts (optional)</span>
          </li>
        </ol>

        <h3 className="font-bold text-lg text-gray-800 mt-6">Step 2: Initial Termux Setup</h3>
        <p className="text-gray-700">Open Termux and run these commands:</p>
        <CodeBlock>{`# Update Termux packages
pkg update && pkg upgrade -y

# Grant storage access (allows access to /sdcard)
termux-setup-storage

# Install essential packages
pkg install -y proot-distro git wget curl nano`}</CodeBlock>

        <h3 className="font-bold text-lg text-gray-800 mt-6">Step 3: Install Debian with proot-distro</h3>
        <CodeBlock>{`# Install Debian
proot-distro install debian

# Login to Debian
proot-distro login debian

# You're now in a Debian environment!
# Update the system
apt update && apt upgrade -y`}</CodeBlock>

        <h3 className="font-bold text-lg text-gray-800 mt-6">Step 4: Install Klipper Dependencies</h3>
        <CodeBlock>{`# Install required packages
apt install -y \\
  git \\
  python3 \\
  python3-pip \\
  python3-dev \\
  python3-venv \\
  virtualenv \\
  libconfig-dev \\
  libdbus-1-dev \\
  libegl-dev \\
  libgl-dev \\
  libxcb-dev \\
  libwayland-dev \\
  wayland-protocols \\
  cmake \\
  build-essential \\
  nginx \\
  sudo \\
  wget \\
  curl \\
  nano`}</CodeBlock>

        <h3 className="font-bold text-lg text-gray-800 mt-6">Step 5: Install Klipper via KIAUH</h3>
        <CodeBlock>{`# Clone KIAUH (Klipper Installation And Update Helper)
cd ~
git clone https://github.com/dw-0/KIAUH.git

# Run KIAUH
cd KIAUH
./kiauh.sh

# From the KIAUH menu:
# 1. Install Klipper
# 2. Install Moonraker
# 3. Install Mainsail (or Fluidd)
# 4. (Optional) Install KlipperScreen

# Exit KIAUH when done`}</CodeBlock>

        <Info>
          <strong>KIAUH will:</strong>
          <br />• Download and install Klipper source code
          <br />• Set up Python virtual environment
          <br />• Install Moonraker API server
          <br />• Configure nginx web server
          <br />• Set up Mainsail/Fluidd web interface
        </Info>

        <h3 className="font-bold text-lg text-gray-800 mt-6">Step 6: Configure USB Serial Access</h3>
        <p className="text-gray-700">To access your printer via USB from within the Debian proot environment:</p>
        
        <CodeBlock>{`# Exit Debian first (type 'exit')
# Back in Termux, find your USB device:
ls /dev/bus/usb/*

# Login to Debian with USB device binding:
proot-distro login debian --bind /dev/bus/usb:/dev/bus/usb

# Inside Debian, check for the printer:
ls /dev/ttyUSB* /dev/ttyACM* 2>/dev/null

# Make the device accessible:
sudo chmod 777 /dev/ttyUSB0  # or /dev/ttyACM0
# Or find the exact device name and use that`}</CodeBlock>

        <Tip>
          <strong>Alternative: Octo4a for USB serial</strong>
          <br />If the printer doesn't appear in /dev/, install <a href="https://github.com/feelfreelinux/octo4a" className="text-blue-600 hover:underline" target="_blank" rel="noopener">Octo4a</a> app (provides USB serial driver), then mount its serial pipe:
          <code className="block bg-gray-100 p-2 mt-2 rounded text-sm">proot-distro login debian --bind /data/data/com.octo4a/files:/home/user/octo4a</code>
          Then use <code className="bg-gray-100 px-1 rounded">/home/user/octo4a/serialpipe</code> as your serial port.
        </Tip>

        <h3 className="font-bold text-lg text-gray-800 mt-6">Step 7: Configure printer.cfg</h3>
        <CodeBlock>{`# Edit the printer configuration
nano ~/printer_data/config/printer.cfg

# Add your Ender 3 V3 SE configuration
# Use a community config from:
# https://github.com/bootuz-dinamon/ender3-v3-se-full-klipper
# or
# https://github.com/0xD34D/ender3-v3-se-klipper-config

# Update the [mcu] section serial path:
[mcu]
serial: /dev/ttyUSB0  # or /dev/ttyACM0 or /home/user/octo4a/serialpipe
restart_method: command`}</CodeBlock>

        <h3 className="font-bold text-lg text-gray-800 mt-6">Step 8: Start Klipper Services</h3>
        <CodeBlock>{`# Start Klipper
sudo systemctl start klipper

# Start Moonraker
sudo systemctl start moonraker

# Start nginx (web server)
sudo systemctl start nginx

# Check status
sudo systemctl status klipper
sudo systemctl status moonraker`}</CodeBlock>

        <h3 className="font-bold text-lg text-gray-800 mt-6">Step 9: Access the Web Interface</h3>
        <p className="text-gray-700">Find your tablet's IP address:</p>
        <CodeBlock>{`# In Termux (outside Debian):
ifconfig
# Look for wlan0 and note the inet address (e.g., 192.168.1.100)`}</CodeBlock>

        <p className="text-gray-700 mt-3">Then open a browser on your tablet (or any device on the same WiFi) and go to:</p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>Mainsail:</strong> <code className="bg-gray-100 px-1 rounded">http://&lt;tablet-ip&gt;/</code></li>
          <li><strong>Fluidd:</strong> <code className="bg-gray-100 px-1 rounded">http://&lt;tablet-ip&gt;/</code> (if you chose Fluidd)</li>
        </ul>

        <h3 className="font-bold text-lg text-gray-800 mt-6">Step 10: Set Up Autostart (Optional)</h3>
        <CodeBlock>{`# In Termux (outside Debian), create boot script:
mkdir -p ~/.termux/boot/
nano ~/.termux/boot/start-klipper.sh

# Add this content:
#!/data/data/com.termux/files/usr/bin/sh
termux-wake-lock
proot-distro login debian --bind /dev/bus/usb:/dev/bus/usb -- bash -c "sudo systemctl start klipper && sudo systemctl start moonraker && sudo systemctl start nginx"

# Make it executable:
chmod +x ~/.termux/boot/start-klipper.sh`}</CodeBlock>

        <Tip>
          <strong>Prevent Android from killing Termux:</strong>
          <br />• Disable battery optimization for Termux (Settings → Apps → Termux → Battery → Don't optimize)
          <br />• Enable "Stay Awake" in Developer Options
          <br />• Run <code className="bg-gray-100 px-1 rounded">termux-wake-lock</code> in Termux
          <br />• Install "Wake Lock - CPU Awake" app from Play Store
        </Tip>

        <h3 className="font-bold text-lg text-gray-800 mt-6">Building Firmware (Advantage of Termux Method)</h3>
        <p className="text-gray-700">Unlike BeamKlipper, you can build firmware directly on your tablet:</p>
        <CodeBlock>{`# Inside Debian proot:
cd ~/klipper
make menuconfig

# Configure for your CR4NS200320C14 board:
# - Micro-controller: STMicroelectronics STM32
# - Processor: STM32F103
# - [*] Disable SWD at startup (for GigaDevice clones)
# - Bootloader: No bootloader
# - Communication: USB (on PA11/PA12)

make

# The compiled firmware will be at:
# ~/klipper/out/klipper.bin

# Copy to tablet storage for ST-Link flashing:
cp ~/klipper/out/klipper.bin ~/storage/downloads/`}</CodeBlock>

        <Warning>
          <strong>Troubleshooting:</strong>
          <br />• If nginx fails to start, check <code className="bg-gray-100 px-1 rounded">/var/log/nginx/error.log</code>
          <br />• If Klipper can't connect to MCU, verify USB serial permissions
          <br />• If services don't auto-start, check systemd is working in proot
          <br />• For permission issues, run commands with <code className="bg-gray-100 px-1 rounded">sudo</code>
        </Warning>
      </div>
    ),
  },
  {
    id: 4,
    title: "Flash Firmware via ST-Link V2",
    icon: "🔧",
    content: (
      <div className="space-y-4">
        <p className="text-gray-700">Now flash the Klipper firmware to your Ender 3 V3 SE's mainboard using the ST-Link V2. Since your tablet can't run STM32CubeProgrammer natively, you have two options:</p>

        <h3 className="font-bold text-lg text-gray-800">Option A: Flash from a PC (Recommended for first time)</h3>
        <p className="text-gray-700">Use a Windows/Mac/Linux computer with STM32CubeProgrammer for the initial flash:</p>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>Download the prebuilt firmware from <a href="https://github.com/utkabobr/klipper/tree/prebuilt-v0.12.0" className="text-blue-600 hover:underline" target="_blank" rel="noopener">utkabobr/klipper prebuilt</a> (compatible with BeamKlipper)</li>
          <li>OR compile your own on a PC / via Termux proot</li>
          <li>Install <strong>STM32CubeProgrammer</strong> on the PC</li>
          <li>Connect ST-Link V2 to PC via USB</li>
          <li>Connect ST-Link V2 to printer board SWD pins</li>
          <li>Flash the firmware (see connection details below)</li>
        </ol>

        <h3 className="font-bold text-lg text-gray-800 mt-6">Option B: Flash via Termux on the Tablet (Advanced)</h3>
        <p className="text-gray-700">If using the Termux method, you can flash directly from the tablet:</p>
        <CodeBlock>{`# In Termux:
pkg install openocd android-tools

# Connect ST-Link V2 via OTG
# Verify connection:
lsusb

# Flash using st-flash:
st-flash write /sdcard/klipper.bin 0x08000000

# Or using OpenOCD:
openocd -f interface/stlink.cfg -c "transport select hla_swd" \\
  -f target/stm32f1x.cfg \\
  -c "program /sdcard/klipper.bin verify reset exit 0x08000000"`}</CodeBlock>

        <h3 className="font-bold text-lg text-gray-800 mt-6">ST-Link V2 Connection to Printer Board</h3>
        <PinDiagram />

        <h3 className="font-bold text-lg text-gray-800 mt-6">Finding SWD Pins on CR4NS200320C14</h3>
        <p className="text-gray-700">On your CR4NS200320C14 board, look for the SWD pins:</p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Near the <strong>GD303RET6</strong> chip (the large 64-pin square IC, typically labeled "GD32" or "303")</li>
          <li>Look for a small <strong>4-pin header</strong> labeled "SWD", "DEBUG", or "JTAG" — usually near the edge of the board</li>
          <li>Some boards have <strong>test pads</strong> (small copper circles) instead of a header — you may need to solder pin headers or use pogo pins</li>
          <li>The pins should be labeled: <strong>SWDIO</strong>, <strong>SWCLK</strong>, <strong>GND</strong>, and <strong>3.3V</strong></li>
          <li>If you can't find them, look for the GD303RET6 datasheet — SWDIO is on pin PA13, SWCLK on PA14</li>
        </ul>

        <Tip>
          <strong>Alternative: SD card method.</strong> The CR4NS200320C14 board supports SD card firmware flashing. If you can't find the SWD pins, you can flash via SD card instead (rename klipper.bin to firmware.bin, format SD as FAT32 with 4096-byte clusters). However, the ST-Link method is more reliable.
        </Tip>

        <h3 className="font-bold text-lg text-gray-800 mt-6">Firmware Configuration for CR4NS200320C14</h3>
        
        <Warning>
          <strong>CRITICAL for your board:</strong> The GD303RET6 chip is a GigaDevice clone. You MUST enable "Disable SWD at startup" or the firmware won't work properly after the first boot!
        </Warning>

        <div className="bg-gray-900 text-white p-4 rounded-lg font-mono text-sm space-y-1 mt-4">
          <div className="text-cyan-400"># For your CR4NS200320C14 board (GD303RET6):</div>
          <div>Micro-controller architecture: <span className="text-green-400">STMicroelectronics STM32</span></div>
          <div>Processor model: <span className="text-green-400">STM32F103</span></div>
          <div><span className="text-yellow-400 font-bold">[*] Disable SWD at startup (for GigaDevice stm32f103 clones)</span></div>
          <div>Bootloader offset: <span className="text-green-400">No bootloader</span></div>
          <div>Communication interface: <span className="text-green-400">USB (on PA11/PA12)</span></div>
        </div>

        <Info>
          <strong>Why "Disable SWD at startup"?</strong> The GD303RET6 chip has a quirk where it tries to use SWD pins (PA13/PA14) for other purposes after boot. Enabling this option prevents conflicts and ensures stable operation.
        </Info>

        <Warning>
          <strong>SAFETY:</strong> Disconnect printer from power before connecting ST-Link. After flashing, disconnect ST-Link before powering on the printer.
        </Warning>

        <h3 className="font-bold text-lg text-gray-800 mt-6">Alternative: SD Card Flash Method (No ST-Link Needed)</h3>
        <p className="text-gray-700">Your CR4NS200320C14 board supports SD card flashing. If you can't find the SWD pins or don't have a PC for STM32CubeProgrammer:</p>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>Format a microSD card as <strong>FAT32</strong> with <strong>4096-byte allocation unit size</strong></li>
          <li>Copy <code className="bg-gray-100 px-1 rounded">klipper.bin</code> to the SD card and rename it to <code className="bg-gray-100 px-1 rounded">firmware.bin</code> or <code className="bg-gray-100 px-1 rounded">firmware.cur</code></li>
          <li>Power off the printer</li>
          <li>Insert the SD card into the printer's SD slot</li>
          <li>Power on the printer and wait 2-3 minutes</li>
          <li>The firmware should flash automatically (screen may show screensaver)</li>
          <li>Power off, remove the SD card, then power on again</li>
        </ol>

        <Warning>
          <strong>SD card method can be finicky:</strong> The CR4NS200320C14's SD card slot can be unreliable. If it doesn't work, try:
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Cleaning the SD card slot with compressed air</li>
            <li>Using a different SD card (smaller is better, ≤8GB recommended)</li>
            <li>Reformatting with exact 4096-byte cluster size</li>
            <li>Trying multiple times — some users report it takes 3-5 attempts</li>
          </ul>
        </Warning>

        <Tip>
          <strong>Using BeamKlipper's prebuilt firmware:</strong> If you use BeamKlipper, download the matching prebuilt firmware.bin from the BeamKlipper GitHub. This ensures version compatibility between the host software and printer firmware.
        </Tip>
      </div>
    ),
  },
  {
    id: 5,
    title: "Configure printer.cfg",
    icon: "📝",
    content: (
      <div className="space-y-4">
        <p className="text-gray-700">Configure Klipper to communicate with your Ender 3 V3 SE. You'll edit the printer.cfg through the web interface on your tablet.</p>

        <h3 className="font-bold text-lg text-gray-800">Find the Serial Port</h3>
        <p className="text-gray-700">In Termux, the serial port depends on how you connected the printer:</p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>If using direct USB: <code className="bg-gray-100 px-1 rounded">/dev/ttyUSB0</code> or <code className="bg-gray-100 px-1 rounded">/dev/ttyACM0</code></li>
          <li>If using Octo4a: <code className="bg-gray-100 px-1 rounded">/home/user/octo4a/serialpipe</code></li>
        </ul>

        <Info>
          <strong>Finding your serial port:</strong> In Termux, run <code className="bg-gray-100 px-1 rounded">ls /dev/ttyUSB* /dev/ttyACM*</code> to see available devices. Plug/unplug the printer to see which device appears/disappears.
        </Info>

        <h3 className="font-bold text-lg text-gray-800 mt-6">Download a Pre-made Config</h3>
        <p className="text-gray-700">Use one of these community-maintained configs:</p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><a href="https://github.com/bootuz-dinamon/ender3-v3-se-full-klipper" className="text-blue-600 hover:underline font-medium" target="_blank" rel="noopener">bootuz-dinamon/ender3-v3-se-full-klipper</a> — Full config with driver section</li>
          <li><a href="https://github.com/0xD34D/ender3-v3-se-klipper-config" className="text-blue-600 hover:underline font-medium" target="_blank" rel="noopener">0xD34D/ender3-v3-se-klipper-config</a> — Config with PRtouch support</li>
        </ul>

        <h3 className="font-bold text-lg text-gray-800 mt-6">Edit Config via Web Interface</h3>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>Open a browser on your tablet (or any device on the same WiFi)</li>
          <li>Go to <code className="bg-gray-100 px-1 rounded">http://&lt;tablet-ip&gt;/</code></li>
          <li>In Fluidd/Mainsail, go to the <strong>Configuration</strong> tab</li>
          <li>Open <code className="bg-gray-100 px-1 rounded">printer.cfg</code></li>
          <li>Paste the community config contents</li>
          <li>Update the <code className="bg-gray-100 px-1 rounded">[mcu]</code> section serial path to match your setup</li>
          <li>Save and restart</li>
        </ol>

        <h3 className="font-bold text-lg text-gray-800 mt-6">MCU Section for USB Connection</h3>
        <CodeBlock language="ini">{`[mcu]
# For Termux with direct USB connection:
serial: /dev/ttyUSB0
# Or if using /dev/ttyACM0:
# serial: /dev/ttyACM0
# Or if using Octo4a:
# serial: /home/user/octo4a/serialpipe
restart_method: command`}</CodeBlock>

        <Warning>
          <strong>Pin mappings vary!</strong> Always use the community-verified config files linked above. The CR4NS200320C14 board has specific pin assignments that differ from other Ender 3 boards.
        </Warning>

        <h3 className="font-bold text-lg text-gray-800 mt-6">Finding Your Tablet's IP Address</h3>
        <p className="text-gray-700">On the tablet, go to <strong>Settings → WiFi → tap your connected network</strong> to see the IP address. Or run <code className="bg-gray-100 px-1 rounded">ifconfig</code> in Termux and look for wlan0.</p>
      </div>
    ),
  },
  {
    id: 6,
    title: "Verify & Test",
    icon: "✅",
    content: (
      <div className="space-y-4">
        <p className="text-gray-700">Verify that Klipper is communicating with your printer correctly through the tablet.</p>

        <h3 className="font-bold text-lg text-gray-800">Check Connection</h3>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>Power on the Ender 3 V3 SE</li>
          <li>Connect the printer to the tablet via USB OTG</li>
          <li>In Termux, login to Debian and start services:
            <CodeBlock>{`proot-distro login debian --bind /dev/bus/usb:/dev/bus/usb
sudo chmod 777 /dev/ttyUSB0  # or /dev/ttyACM0
sudo systemctl start klipper
sudo systemctl start moonraker
sudo systemctl start nginx`}</CodeBlock>
          </li>
          <li>Open the web interface at <code className="bg-gray-100 px-1 rounded">http://&lt;tablet-ip&gt;/</code></li>
          <li>Check that the status shows <strong>"Ready"</strong></li>
        </ol>

        <h3 className="font-bold text-lg text-gray-800 mt-6">Test Movements</h3>
        <p className="text-gray-700">In the Fluidd/Mainsail console, test basic movements:</p>
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

        <h3 className="font-bold text-lg text-gray-800 mt-6">Set Up as Dedicated Display (Optional)</h3>
        <p className="text-gray-700">Turn your tablet into a dedicated Klipper touchscreen:</p>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>Set BeamKlipper as the <strong>default launcher</strong> (Settings → Apps → Default apps → Home app)</li>
          <li>Remove the lock screen PIN (required if device is encrypted)</li>
          <li>Enable auto-start for your printer instance in BeamKlipper</li>
          <li>Set screen timeout to "Never" while charging</li>
          <li>Mount the tablet near your printer for a built-in touchscreen interface!</li>
        </ol>

        <Tip>
          <strong>Known limitations:</strong> The Ender 3 V3 SE's built-in screen will show a screensaver after flashing Klipper. Auto Z-offset probing (PRtouch) requires a special Klipper fork by 0xD34D.
        </Tip>
      </div>
    ),
  },
  {
    id: 7,
    title: "Troubleshooting",
    icon: "🔍",
    content: (
      <div className="space-y-4">
        <p className="text-gray-700">Common issues and solutions specific to the Samsung Galaxy Tab A 10.5 + Termux + Klipper setup.</p>

        <div className="space-y-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-bold text-red-700">❌ "MCU: Unable to connect"</h4>
            <ul className="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
              <li>Check OTG connection — make sure the cable is working</li>
              <li>In Termux, verify the serial device exists: <code className="bg-gray-100 px-1 rounded">ls /dev/ttyUSB*</code></li>
              <li>Check USB permissions: <code className="bg-gray-100 px-1 rounded">sudo chmod 777 /dev/ttyUSB0</code></li>
              <li>Try unplugging and replugging the USB cable</li>
              <li>Ensure the printer firmware was flashed correctly</li>
              <li>Restart Klipper: <code className="bg-gray-100 px-1 rounded">sudo systemctl restart klipper</code></li>
              <li>Check Klipper logs: <code className="bg-gray-100 px-1 rounded">tail -f ~/printer_data/logs/klippy.log</code></li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-bold text-red-700">❌ Tablet not charging while using OTG</h4>
            <ul className="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
              <li>Verify you're using a powered OTG hub or custom OTG+charge cable</li>
              <li>Try different resistor values (1kΩ to 100kΩ) in the DIY cable</li>
              <li>Some USB hubs don't support simultaneous charge — try a different hub</li>
              <li>As a last resort: print from battery power (6000mAh gives ~2-4 hours)</li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-bold text-red-700">❌ Termux/Debian gets killed in background</h4>
            <ul className="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
              <li>Disable battery optimization for Termux (Settings → Apps → Termux → Battery → Don't optimize)</li>
              <li>Run <code className="bg-gray-100 px-1 rounded">termux-wake-lock</code> in Termux</li>
              <li>Install "Wake Lock - CPU Awake" app from Play Store</li>
              <li>Run <code className="bg-gray-100 px-1 rounded">dumpsys deviceidle disable</code> in Termux</li>
              <li>Enable "Stay Awake" in Developer Options</li>
              <li>Some Samsung devices have aggressive task killing — check "Recent apps" → lock Termux</li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-bold text-red-700">❌ OTG not detected / USB device not showing</h4>
            <ul className="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
              <li>Check that USB OTG is enabled (some Samsung tablets need it enabled in settings)</li>
              <li>Try a different OTG adapter — some cheap ones don't work</li>
              <li>In Termux, run <code className="bg-gray-100 px-1 rounded">ls /dev/bus/usb/*</code> to check if USB is working</li>
              <li>Restart the tablet with the USB device already connected</li>
              <li>Grant USB permission when prompted by Android</li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-bold text-red-700">❌ Web interface not accessible from other devices</h4>
            <ul className="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
              <li>Ensure tablet and other devices are on the same WiFi network</li>
              <li>Check the tablet's IP address (Settings → WiFi → network details)</li>
              <li>Verify nginx is running: <code className="bg-gray-100 px-1 rounded">sudo systemctl status nginx</code></li>
              <li>Check nginx config: <code className="bg-gray-100 px-1 rounded">sudo nginx -t</code></li>
              <li>Try accessing from the tablet itself: <code className="bg-gray-100 px-1 rounded">http://localhost/</code></li>
              <li>Check nginx error log: <code className="bg-gray-100 px-1 rounded">cat /var/log/nginx/error.log</code></li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-bold text-red-700">❌ proot-distro login fails</h4>
            <ul className="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
              <li>Try <code className="bg-gray-100 px-1 rounded">proot-distro remove debian</code> then reinstall</li>
              <li>Check available storage: <code className="bg-gray-100 px-1 rounded">df -h</code></li>
              <li>Update proot-distro: <code className="bg-gray-100 px-1 rounded">pkg upgrade proot-distro</code></li>
              <li>Try with <code className="bg-gray-100 px-1 rounded">--fix-low-uid</code> flag</li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-bold text-red-700">❌ KIAUH installation fails</h4>
            <ul className="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
              <li>Ensure all dependencies are installed (see Step 4)</li>
              <li>Check Python version: <code className="bg-gray-100 px-1 rounded">python3 --version</code> (needs 3.7+)</li>
              <li>Try running KIAUH with <code className="bg-gray-100 px-1 rounded">sudo</code></li>
              <li>Check KIAUH logs in <code className="bg-gray-100 px-1 rounded">~/kiauh_logs/</code></li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-bold text-red-700">❌ ST-Link can't connect to MCU</h4>
            <ul className="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
              <li>Verify SWDIO and SWCLK are not swapped</li>
              <li>Ensure the board is powered</li>
              <li>Try "Connect Under Reset" mode in STM32CubeProgrammer</li>
              <li>Check wire connections are solid (use short jumper wires)</li>
              <li>Try lowering adapter speed</li>
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

        <div className="mt-8 p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
          <div className="text-xs font-bold text-blue-800 uppercase mb-2">Your Setup</div>
          <div className="space-y-2 text-xs text-blue-700">
            <div className="flex items-center gap-2">📱 Galaxy Tab A 10.5</div>
            <div className="flex items-center gap-2">🖨️ Ender 3 V3 SE</div>
            <div className="flex items-center gap-2">🔧 ST-Link V2</div>
          </div>
        </div>
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
                <p className="text-xs text-gray-400">Ender 3 V3 SE + Galaxy Tab SM-T395 + ST-Link V2</p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-3 text-sm">
              <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-medium">GD303RET6</span>
              <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-xs font-medium">SWD Flash</span>
              <span className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-xs font-medium">Termux + proot</span>
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
          <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 rounded-2xl p-8 mb-8 text-white shadow-xl">
            <h2 className="text-3xl font-bold mb-3">Install Klipper on Ender 3 V3 SE</h2>
            <p className="text-blue-100 text-lg mb-2">
              Using your <strong>Samsung Galaxy Tab A 10.5 (SM-T395)</strong> as the Klipper host — no Raspberry Pi needed!
            </p>
            <p className="text-blue-200 text-sm mb-4">
              Flash firmware via ST-Link V2, then control everything from your tablet's touchscreen.
            </p>
            <div className="flex flex-wrap gap-3 mt-4">
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">⏱️ ~2-3 hours</span>
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">🔧 Intermediate</span>
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">📱 No Raspberry Pi</span>
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">📟 ST-Link V2</span>
            </div>
          </div>

          {/* YOUR BOARD INFO */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-300 rounded-2xl p-6 mb-6 shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-2xl text-white">🔍</div>
              <div>
                <h2 className="text-2xl font-bold text-blue-900">Your Board: CR4NS200320C14</h2>
                <p className="text-blue-700 text-sm">GD303RET6 chip detected — special firmware settings required</p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-4 border border-blue-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <div className="font-bold text-gray-700 mb-1">Mainboard</div>
                  <div className="text-gray-600">CR4NS200320C14</div>
                </div>
                <div>
                  <div className="font-bold text-gray-700 mb-1">Chip</div>
                  <div className="text-gray-600">GD303RET6 (GigaDevice)</div>
                </div>
                <div>
                  <div className="font-bold text-gray-700 mb-1">Critical Setting</div>
                  <div className="text-red-600 font-medium">⚠️ Disable SWD at startup</div>
                </div>
              </div>
            </div>
          </div>

          {/* COMPLETE STEP-BY-STEP WALKTHROUGH */}
          <div className="bg-white border-2 border-gray-300 rounded-2xl p-6 mb-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-2xl text-white">📋</div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Complete Step-by-Step Walkthrough</h2>
                <p className="text-gray-600 text-sm">Follow these steps in order. Each step builds on the previous one.</p>
              </div>
            </div>

            {/* PHASE 1 */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-indigo-700 mb-4 flex items-center gap-2">
                <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm">PHASE 1</span>
                Order Hardware (Do This Today)
              </h3>
              <div className="bg-indigo-50 rounded-xl p-5 space-y-3">
                <p className="text-gray-700 font-medium">Order these items from AliExpress or Amazon:</p>
                <div className="space-y-2">
                  <div className="flex items-start gap-3 bg-white p-3 rounded-lg">
                    <span className="text-2xl">🔧</span>
                    <div>
                      <div className="font-bold text-gray-800">ST-Link V2 Programmer</div>
                      <div className="text-sm text-gray-600">Search: "ST-Link V2 mini" | Cost: ~$3-5 | Get clone version, works fine</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white p-3 rounded-lg">
                    <span className="text-2xl">🔌</span>
                    <div>
                      <div className="font-bold text-gray-800">MicroUSB OTG Adapter</div>
                      <div className="text-sm text-gray-600">Search: "micro USB OTG adapter female" | Cost: ~$2-3 | Male microUSB to female USB-A</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white p-3 rounded-lg">
                    <span className="text-2xl">⚡</span>
                    <div>
                      <div className="font-bold text-gray-800">Powered USB OTG Hub</div>
                      <div className="text-sm text-gray-600">Search: "micro USB OTG hub with charging" | Cost: ~$8-15 | Must support simultaneous charging + data</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white p-3 rounded-lg">
                    <span className="text-2xl">🔗</span>
                    <div>
                      <div className="font-bold text-gray-800">Jumper Wires (Female-to-Female)</div>
                      <div className="text-sm text-gray-600">Search: "dupont wire female to female" | Cost: ~$2 | Get 5-10 wires, 10cm length</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white p-3 rounded-lg">
                    <span className="text-2xl">📡</span>
                    <div>
                      <div className="font-bold text-gray-800">USB Data Cable (A to B or A to C)</div>
                      <div className="text-sm text-gray-600">Check what port your printer has | Must be DATA cable, not charge-only | You probably have one</div>
                    </div>
                  </div>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mt-4">
                  <p className="text-sm text-yellow-800"><strong>💡 Tip:</strong> Total cost: ~$15-25. AliExpress is cheapest but takes 1-3 weeks. Amazon is faster but more expensive.</p>
                </div>
              </div>
            </div>

            {/* PHASE 2 */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-purple-700 mb-4 flex items-center gap-2">
                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">PHASE 2</span>
                Prepare Your Tablet (While Waiting for Hardware)
              </h3>
              <div className="bg-purple-50 rounded-xl p-5 space-y-4">
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <span className="bg-purple-500 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold shrink-0">1</span>
                      <div>
                        <div className="font-bold text-gray-800">Install Termux from F-Droid (NOT Play Store!)</div>
                        <div className="text-sm text-gray-600 mt-1">
                          Go to <a href="https://f-droid.org/packages/com.termux/" className="text-blue-600 underline" target="_blank" rel="noopener">f-droid.org/packages/com.termux</a> on your tablet browser and download the APK. Install it.
                        </div>
                        <div className="text-xs text-red-600 mt-1">⚠️ The Play Store version is outdated and broken!</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <span className="bg-purple-500 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold shrink-0">2</span>
                      <div>
                        <div className="font-bold text-gray-800">Install Termux Add-ons</div>
                        <div className="text-sm text-gray-600 mt-1">
                          From F-Droid, also install:
                          <ul className="list-disc list-inside mt-1 space-y-1">
                            <li><strong>Termux:API</strong> — for hardware access</li>
                            <li><strong>Termux:Boot</strong> — for autostart on tablet boot</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <span className="bg-purple-500 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold shrink-0">3</span>
                      <div>
                        <div className="font-bold text-gray-800">Open Termux and Run Initial Setup</div>
                        <div className="text-sm text-gray-600 mt-1">Type these commands exactly (press Enter after each line):</div>
                        <div className="bg-gray-900 text-green-400 p-3 rounded mt-2 font-mono text-xs overflow-x-auto">
                          <div>pkg update && pkg upgrade -y</div>
                          <div className="mt-1">termux-setup-storage</div>
                          <div className="text-gray-500 mt-1"># (tap "Allow" when prompted for storage access)</div>
                          <div className="mt-1">pkg install -y proot-distro git wget curl nano</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <span className="bg-purple-500 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold shrink-0">4</span>
                      <div>
                        <div className="font-bold text-gray-800">Install Debian Linux Environment</div>
                        <div className="text-sm text-gray-600 mt-1">In Termux, type:</div>
                        <div className="bg-gray-900 text-green-400 p-3 rounded mt-2 font-mono text-xs overflow-x-auto">
                          <div>proot-distro install debian</div>
                          <div className="mt-1">proot-distro login debian</div>
                          <div className="text-gray-500 mt-1"># (you're now inside Debian!)</div>
                          <div className="mt-1">apt update && apt upgrade -y</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <span className="bg-purple-500 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold shrink-0">5</span>
                      <div>
                        <div className="font-bold text-gray-800">Open Your Printer and Find SWD Pins</div>
                        <div className="text-sm text-gray-600 mt-1">
                          <ol className="list-decimal list-inside space-y-1">
                            <li>Turn off and unplug the printer</li>
                            <li>Remove the bottom cover (4-6 screws)</li>
                            <li>Locate the mainboard (CR4NS200320C14)</li>
                            <li>Find the large chip labeled "GD303RET6" or "GD32"</li>
                            <li>Look near it for a small 4-pin header labeled "SWD" or "DEBUG"</li>
                            <li>If no header, look for test pads (small copper circles) labeled SWDIO, SWCLK, GND, 3.3V</li>
                            <li>Take a photo for reference</li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <span className="bg-purple-500 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold shrink-0">6</span>
                      <div>
                        <div className="font-bold text-gray-800">Configure Tablet Settings</div>
                        <div className="text-sm text-gray-600 mt-1">
                          <ol className="list-decimal list-inside space-y-1">
                            <li>Go to <strong>Settings → About tablet</strong></li>
                            <li>Tap <strong>Build number</strong> 7 times to enable Developer Options</li>
                            <li>Go to <strong>Settings → Developer options</strong></li>
                            <li>Enable <strong>USB debugging</strong></li>
                            <li>Enable <strong>Stay awake</strong> (screen won't sleep while charging)</li>
                            <li>Go to <strong>Settings → Apps → Termux → Battery</strong></li>
                            <li>Select <strong>"Don't optimize"</strong> or <strong>"Allow background activity"</strong></li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* PHASE 3 */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-green-700 mb-4 flex items-center gap-2">
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">PHASE 3</span>
                Flash Firmware (When ST-Link Arrives)
              </h3>
              <div className="bg-green-50 rounded-xl p-5 space-y-4">
                <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-4 mb-4">
                  <p className="text-sm text-yellow-900"><strong>⚠️ Important:</strong> You need a Windows/Mac/Linux PC for this step. Borrow one if needed. You only do this once.</p>
                </div>

                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <span className="bg-green-500 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold shrink-0">1</span>
                      <div>
                        <div className="font-bold text-gray-800">Download Firmware on PC</div>
                        <div className="text-sm text-gray-600 mt-1">
                          Go to <a href="https://github.com/0xD34D/klipper_ender3_v3_se" className="text-blue-600 underline" target="_blank" rel="noopener">github.com/0xD34D/klipper_ender3_v3_se</a> and download the latest release, or build your own (see below).
                        </div>
                        <div className="text-xs text-gray-500 mt-1">Or use the SD card method instead (skip to Step 5 below)</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <span className="bg-green-500 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold shrink-0">2</span>
                      <div>
                        <div className="font-bold text-gray-800">Install STM32CubeProgrammer on PC</div>
                        <div className="text-sm text-gray-600 mt-1">
                          Download from ST's website: <a href="https://www.st.com/en/development-tools/stm32cubeprog.html" className="text-blue-600 underline" target="_blank" rel="noopener">stm32cubeprog</a> (requires free ST account)
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <span className="bg-green-500 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold shrink-0">3</span>
                      <div>
                        <div className="font-bold text-gray-800">Connect ST-Link to Printer Board</div>
                        <div className="text-sm text-gray-600 mt-1">
                          Use jumper wires to connect:
                          <div className="bg-gray-100 p-2 rounded mt-2 text-xs font-mono">
                            <div>ST-Link 3.3V → Board 3.3V</div>
                            <div>ST-Link SWDIO → Board SWDIO</div>
                            <div>ST-Link GND → Board GND</div>
                            <div>ST-Link SWCLK → Board SWCLK</div>
                          </div>
                        </div>
                        <div className="text-xs text-red-600 mt-2">⚠️ DO NOT connect 5V! Only use 3.3V!</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <span className="bg-green-500 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold shrink-0">4</span>
                      <div>
                        <div className="font-bold text-gray-800">Flash Firmware</div>
                        <div className="text-sm text-gray-600 mt-1">
                          <ol className="list-decimal list-inside space-y-1">
                            <li>Connect ST-Link to PC via USB</li>
                            <li>Power on the printer (keep ST-Link connected)</li>
                            <li>Open STM32CubeProgrammer</li>
                            <li>Select <strong>ST-LINK</strong> as connection type</li>
                            <li>Click <strong>Connect</strong></li>
                            <li>Go to <strong>Erasing & Programming</strong> tab</li>
                            <li>Browse to your <strong>klipper.bin</strong> file</li>
                            <li>Set start address: <strong>0x08000000</strong></li>
                            <li>Check <strong>"Run after programming"</strong></li>
                            <li>Click <strong>Start Programming</strong></li>
                            <li>Wait for completion (1-2 minutes)</li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <span className="bg-green-500 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold shrink-0">5</span>
                      <div>
                        <div className="font-bold text-gray-800">Alternative: SD Card Method (No PC Needed)</div>
                        <div className="text-sm text-gray-600 mt-1">
                          If you can't find SWD pins or don't have a PC:
                          <ol className="list-decimal list-inside space-y-1 mt-2">
                            <li>Format microSD as <strong>FAT32</strong> with <strong>4096-byte</strong> cluster size</li>
                            <li>Copy <strong>klipper.bin</strong> to SD card, rename to <strong>firmware.bin</strong></li>
                            <li>Power off printer</li>
                            <li>Insert SD card</li>
                            <li>Power on and wait 2-3 minutes</li>
                            <li>Power off, remove SD card, power on again</li>
                          </ol>
                        </div>
                        <div className="text-xs text-gray-500 mt-2">⚠️ SD card method can be unreliable on CR4NS200320C14. May need multiple attempts.</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <span className="bg-green-500 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold shrink-0">6</span>
                      <div>
                        <div className="font-bold text-gray-800">Disconnect ST-Link</div>
                        <div className="text-sm text-gray-600 mt-1">
                          After successful flash, disconnect ST-Link wires and reassemble the printer.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* PHASE 4 */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-orange-700 mb-4 flex items-center gap-2">
                <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm">PHASE 4</span>
                Install Klipper on Tablet (When All Hardware Arrives)
              </h3>
              <div className="bg-orange-50 rounded-xl p-5 space-y-4">
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <span className="bg-orange-500 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold shrink-0">1</span>
                      <div>
                        <div className="font-bold text-gray-800">Continue Debian Setup in Termux</div>
                        <div className="text-sm text-gray-600 mt-1">In Termux, login to Debian and install dependencies:</div>
                        <div className="bg-gray-900 text-green-400 p-3 rounded mt-2 font-mono text-xs overflow-x-auto">
                          <div>proot-distro login debian</div>
                          <div className="mt-1">apt install -y git python3 python3-pip python3-dev \</div>
                          <div>&nbsp;&nbsp;virtualenv libconfig-dev libdbus-1-dev \</div>
                          <div>&nbsp;&nbsp;libegl-dev libgl-dev libxcb-dev \</div>
                          <div>&nbsp;&nbsp;libwayland-dev wayland-protocols \</div>
                          <div>&nbsp;&nbsp;cmake build-essential nginx sudo wget curl nano</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <span className="bg-orange-500 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold shrink-0">2</span>
                      <div>
                        <div className="font-bold text-gray-800">Install Klipper via KIAUH</div>
                        <div className="text-sm text-gray-600 mt-1">In Debian, run:</div>
                        <div className="bg-gray-900 text-green-400 p-3 rounded mt-2 font-mono text-xs overflow-x-auto">
                          <div>cd ~</div>
                          <div>git clone https://github.com/dw-0/KIAUH.git</div>
                          <div>cd KIAUH</div>
                          <div>./kiauh.sh</div>
                          <div className="mt-2 text-gray-500"># From the menu:</div>
                          <div># 1. Install Klipper</div>
                          <div># 2. Install Moonraker</div>
                          <div># 3. Install Mainsail (or Fluidd)</div>
                          <div># Exit when done</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <span className="bg-orange-500 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold shrink-0">3</span>
                      <div>
                        <div className="font-bold text-gray-800">Set Up OTG + Charging</div>
                        <div className="text-sm text-gray-600 mt-1">
                          Connect your powered OTG hub to the tablet, plug in the charger, then connect the printer USB cable to the hub.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <span className="bg-orange-500 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold shrink-0">4</span>
                      <div>
                        <div className="font-bold text-gray-800">Configure USB Access</div>
                        <div className="text-sm text-gray-600 mt-1">Exit Debian, then login with USB binding:</div>
                        <div className="bg-gray-900 text-green-400 p-3 rounded mt-2 font-mono text-xs overflow-x-auto">
                          <div className="text-gray-500"># In Termux (outside Debian):</div>
                          <div>ls /dev/bus/usb/*</div>
                          <div className="mt-1">proot-distro login debian --bind /dev/bus/usb:/dev/bus/usb</div>
                          <div className="mt-2 text-gray-500"># Inside Debian:</div>
                          <div>ls /dev/ttyUSB* /dev/ttyACM* 2&gt;/dev/null</div>
                          <div>sudo chmod 777 /dev/ttyUSB0</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <span className="bg-orange-500 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold shrink-0">5</span>
                      <div>
                        <div className="font-bold text-gray-800">Configure printer.cfg</div>
                        <div className="text-sm text-gray-600 mt-1">
                          Download a community config from <a href="https://github.com/bootuz-dinamon/ender3-v3-se-full-klipper" className="text-blue-600 underline" target="_blank" rel="noopener">here</a> and edit the [mcu] section:
                        </div>
                        <div className="bg-gray-900 text-green-400 p-3 rounded mt-2 font-mono text-xs overflow-x-auto">
                          <div>[mcu]</div>
                          <div>serial: /dev/ttyUSB0</div>
                          <div>restart_method: command</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <span className="bg-orange-500 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold shrink-0">6</span>
                      <div>
                        <div className="font-bold text-gray-800">Start Services</div>
                        <div className="text-sm text-gray-600 mt-1">In Debian, run:</div>
                        <div className="bg-gray-900 text-green-400 p-3 rounded mt-2 font-mono text-xs overflow-x-auto">
                          <div>sudo systemctl start klipper</div>
                          <div>sudo systemctl start moonraker</div>
                          <div>sudo systemctl start nginx</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <span className="bg-orange-500 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold shrink-0">7</span>
                      <div>
                        <div className="font-bold text-gray-800">Access Web Interface</div>
                        <div className="text-sm text-gray-600 mt-1">
                          Find your tablet's IP (Settings → WiFi → tap network), then open browser and go to:
                          <div className="bg-gray-100 p-2 rounded mt-2 font-mono text-xs">
                            http://&lt;tablet-ip&gt;/
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* PHASE 5 */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-blue-700 mb-4 flex items-center gap-2">
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">PHASE 5</span>
                Test and Calibrate
              </h3>
              <div className="bg-blue-50 rounded-xl p-5 space-y-4">
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <span className="bg-blue-500 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold shrink-0">1</span>
                      <div>
                        <div className="font-bold text-gray-800">Test Connection</div>
                        <div className="text-sm text-gray-600 mt-1">
                          In the web interface, check that status shows <strong>"Ready"</strong>. If not, check the troubleshooting section below.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <span className="bg-blue-500 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold shrink-0">2</span>
                      <div>
                        <div className="font-bold text-gray-800">Test Movements</div>
                        <div className="text-sm text-gray-600 mt-1">
                          In the console, run:
                          <div className="bg-gray-900 text-green-400 p-3 rounded mt-2 font-mono text-xs overflow-x-auto">
                            <div>G28</div>
                            <div>G1 X10 F3000</div>
                            <div>G1 Y10 F3000</div>
                            <div>G1 Z1 F300</div>
                          </div>
                          <div className="text-xs text-red-600 mt-2">⚠️ Keep hand near power switch! Stop if motors move wrong direction!</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <span className="bg-blue-500 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold shrink-0">3</span>
                      <div>
                        <div className="font-bold text-gray-800">Calibrate</div>
                        <div className="text-sm text-gray-600 mt-1">
                          Run these calibrations:
                          <ul className="list-disc list-inside mt-2 space-y-1 text-xs">
                            <li><strong>PID tune hotend:</strong> PID_CALIBRATE HEATER=extruder TARGET=200</li>
                            <li><strong>PID tune bed:</strong> PID_CALIBRATE HEATER=heater_bed TARGET=60</li>
                            <li><strong>E-steps:</strong> Extrude 100mm, measure actual vs requested</li>
                            <li><strong>Bed mesh:</strong> BED_MESH_CALIBRATE</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <span className="bg-blue-500 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold shrink-0">4</span>
                      <div>
                        <div className="font-bold text-gray-800">Print a Test!</div>
                        <div className="text-sm text-gray-600 mt-1">
                          Upload a small test print (like a 20mm calibration cube) and start printing. Monitor via the web interface on your tablet!
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SUCCESS MESSAGE */}
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl p-6 text-center">
              <div className="text-4xl mb-3">🎉</div>
              <h3 className="text-2xl font-bold mb-2">You're Done!</h3>
              <p className="text-green-100">Your Ender 3 V3 SE is now running Klipper with your Galaxy Tab as the host!</p>
              <p className="text-sm text-green-200 mt-3">Access the web interface anytime at <code className="bg-white/20 px-2 py-1 rounded">http://&lt;tablet-ip&gt;/</code></p>
            </div>
          </div>

          {/* START HERE - Action Plan */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-300 rounded-2xl p-6 mb-8 shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center text-2xl text-white">🚀</div>
              <div>
                <h2 className="text-2xl font-bold text-emerald-900">Start Here — Your Action Plan</h2>
                <p className="text-emerald-700 text-sm">Follow this checklist in order. Check off each item as you go.</p>
              </div>
            </div>

            {/* Shopping List */}
            <div className="bg-white rounded-xl p-5 mb-5 border border-emerald-200">
              <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-xl">🛒</span> Step 1: Get the Hardware (if you don't have it yet)
              </h3>
              <div className="space-y-2">
                <label className="flex items-start gap-3 p-2 hover:bg-gray-50 rounded cursor-pointer">
                  <input type="checkbox" className="mt-1 w-4 h-4 accent-emerald-500" />
                  <div>
                    <span className="font-medium text-gray-800">ST-Link V2 programmer</span>
                    <span className="text-sm text-gray-500 block">~$3-5 on AliExpress/Amazon. Search "ST-Link V2 mini". Clone versions work fine.</span>
                  </div>
                </label>
                <label className="flex items-start gap-3 p-2 hover:bg-gray-50 rounded cursor-pointer">
                  <input type="checkbox" className="mt-1 w-4 h-4 accent-emerald-500" />
                  <div>
                    <span className="font-medium text-gray-800">MicroUSB OTG adapter</span>
                    <span className="text-sm text-gray-500 block">Female USB-A to male microUSB. Needed to connect USB devices to your tablet.</span>
                  </div>
                </label>
                <label className="flex items-start gap-3 p-2 hover:bg-gray-50 rounded cursor-pointer">
                  <input type="checkbox" className="mt-1 w-4 h-4 accent-emerald-500" />
                  <div>
                    <span className="font-medium text-gray-800">Powered USB hub OR OTG+Charge cable</span>
                    <span className="text-sm text-gray-500 block">Your tablet needs to charge AND use OTG at the same time. A powered microUSB OTG hub with charging passthrough is easiest.</span>
                  </div>
                </label>
                <label className="flex items-start gap-3 p-2 hover:bg-gray-50 rounded cursor-pointer">
                  <input type="checkbox" className="mt-1 w-4 h-4 accent-emerald-500" />
                  <div>
                    <span className="font-medium text-gray-800">Jumper wires (female-to-female)</span>
                    <span className="text-sm text-gray-500 block">4-5 wires to connect ST-Link V2 to the printer's SWD pins.</span>
                  </div>
                </label>
                <label className="flex items-start gap-3 p-2 hover:bg-gray-50 rounded cursor-pointer">
                  <input type="checkbox" className="mt-1 w-4 h-4 accent-emerald-500" />
                  <div>
                    <span className="font-medium text-gray-800">USB cable (A to B or A to C)</span>
                    <span className="text-sm text-gray-500 block">To connect the printer to the tablet. Must be a DATA cable, not charge-only.</span>
                  </div>
                </label>
                <label className="flex items-start gap-3 p-2 hover:bg-gray-50 rounded cursor-pointer">
                  <input type="checkbox" className="mt-1 w-4 h-4 accent-emerald-500" />
                  <div>
                    <span className="font-medium text-gray-800">A Windows/Mac/Linux PC (for initial firmware flash)</span>
                    <span className="text-sm text-gray-500 block">You need a computer to run STM32CubeProgrammer for the one-time firmware flash via ST-Link. Borrow one if needed.</span>
                  </div>
                </label>
              </div>
            </div>

            {/* Decision Tree */}
            <div className="bg-white rounded-xl p-5 mb-5 border border-emerald-200">
              <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-xl">🔀</span> Step 2: Choose Your Path
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border-2 border-emerald-400 bg-emerald-50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-emerald-500 text-white text-xs px-2 py-1 rounded-full font-bold">RECOMMENDED</span>
                  </div>
                  <h4 className="font-bold text-emerald-900">Path A: BeamKlipper</h4>
                  <p className="text-sm text-emerald-800 mt-1">Easiest. No root. Install one APK, done.</p>
                  <ul className="text-xs text-emerald-700 mt-2 space-y-1 list-disc list-inside">
                    <li>No Linux knowledge needed</li>
                    <li>Works on stock Android</li>
                    <li>Can't build firmware on device</li>
                    <li>Best for most users</li>
                  </ul>
                  <div className="mt-3 text-xs font-bold text-emerald-900">Choose this if: you just want it to work.</div>
                </div>
                <div className="border border-gray-300 bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-gray-500 text-white text-xs px-2 py-1 rounded-full font-bold">ADVANCED</span>
                  </div>
                  <h4 className="font-bold text-gray-800">Path B: Termux + proot</h4>
                  <p className="text-sm text-gray-600 mt-1">More control. Build firmware on device.</p>
                  <ul className="text-xs text-gray-600 mt-2 space-y-1 list-disc list-inside">
                    <li>Full Linux environment</li>
                    <li>Can build firmware on tablet</li>
                    <li>SSH access</li>
                    <li>More complex setup</li>
                  </ul>
                  <div className="mt-3 text-xs font-bold text-gray-700">Choose this if: you want full control.</div>
                </div>
              </div>
            </div>

            {/* Action Steps */}
            <div className="bg-white rounded-xl p-5 border border-emerald-200">
              <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-xl">✅</span> Step 3: Do These In Order
              </h3>
              <div className="space-y-3">
                <div className="flex gap-3 items-start">
                  <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">1</div>
                  <div>
                    <div className="font-medium text-gray-800">✅ Board identified: CR4NS200320C14 with GD303RET6 chip</div>
                    <div className="text-sm text-gray-600">You already know your chip! It's a <strong>GigaDevice GD303RET6</strong> clone. This requires the "Disable SWD at startup" firmware option.</div>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">2</div>
                  <div>
                    <div className="font-medium text-gray-800">Locate the SWD pins on the mainboard</div>
                    <div className="text-sm text-gray-600">Look for a small header labeled "SWD" or "DEBUG" near the GD303RET6 chip. On the CR4NS200320C14, look for test pads or a header with SWDIO, SWCLK, GND, and 3.3V.</div>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">3</div>
                  <div>
                    <div className="font-medium text-gray-800">Flash Klipper firmware via ST-Link V2 (using a PC)</div>
                    <div className="text-sm text-gray-600">Connect ST-Link → SWD pins → PC. Use STM32CubeProgrammer to flash the prebuilt firmware.bin. See <strong>Step 5</strong> below for details.</div>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">4</div>
                  <div>
                    <div className="font-medium text-gray-800">Set up your Galaxy Tab for OTG + charging</div>
                    <div className="text-sm text-gray-600">Get the OTG hub/cable working so the tablet can charge while connected to USB devices. See <strong>Step 2</strong> below.</div>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">5</div>
                  <div>
                    <div className="font-medium text-gray-800">Install BeamKlipper on the tablet</div>
                    <div className="text-sm text-gray-600">Download the APK from GitHub, install it, grant permissions. See <strong>Step 3</strong> below.</div>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">6</div>
                  <div>
                    <div className="font-medium text-gray-800">Connect printer to tablet via USB, add printer config</div>
                    <div className="text-sm text-gray-600">Plug in the printer, start BeamKlipper, load a community printer.cfg. See <strong>Step 6</strong> below.</div>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">7</div>
                  <div>
                    <div className="font-medium text-gray-800">Test movements and calibrate!</div>
                    <div className="text-sm text-gray-600">Home the printer, test each axis, PID tune, E-steps calibrate. See <strong>Step 7</strong> below.</div>
                  </div>
                </div>
              </div>
            </div>

            {/* What to do RIGHT NOW */}
            <div className="mt-5 bg-emerald-600 text-white rounded-xl p-5">
              <h3 className="font-bold text-lg mb-2">👉 What to do RIGHT NOW:</h3>
              <ol className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <span className="font-bold">1.</span>
                  <span>If you don't have an ST-Link V2 yet → <strong>order one now</strong> (AliExpress: search "ST-Link V2", ~$3-5, ships in 1-2 weeks). Or buy from Amazon for faster delivery.</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold">2.</span>
                  <span>If you don't have a microUSB OTG adapter → <strong>order one now</strong> (search "micro USB OTG adapter"). Also get a powered OTG hub if you want charging during prints.</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold">3.</span>
                  <span>While waiting for hardware → <strong>open your printer</strong> and locate the SWD pins on the CR4NS200320C14 board. Look for a header or test pads labeled SWDIO, SWCLK, GND, 3.3V near the GD303RET6 chip.</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold">4.</span>
                  <span>On your Galaxy Tab → <strong>install Termux from F-Droid</strong> (NOT Play Store). Also install Termux:API, Termux:Boot from F-Droid. See <strong>Step 3</strong> for full instructions.</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold">5.</span>
                  <span>In Termux, run <code className="bg-emerald-700 px-1 rounded">pkg update && pkg upgrade</code> and <code className="bg-emerald-700 px-1 rounded">pkg install proot-distro</code> to get started.</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold">6.</span>
                  <span>Download the prebuilt firmware from <a href="https://github.com/utkabobr/klipper/tree/prebuilt-v0.12.0" className="underline font-bold" target="_blank" rel="noopener">utkabobr/klipper prebuilt</a> and save it to your PC — you'll need it for the ST-Link flash. Or build your own in Termux (see Step 3).</span>
                </li>
              </ol>
            </div>
          </div>

          {/* Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
              <div className="text-3xl mb-2">🐧</div>
              <h3 className="font-bold text-gray-800">Termux + proot</h3>
              <p className="text-sm text-gray-600 mt-1">Full Linux environment on your tablet. Complete control, build firmware, SSH access, no restrictions.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
              <div className="text-3xl mb-2">⚡</div>
              <h3 className="font-bold text-gray-800">Full Klipper Stack</h3>
              <p className="text-sm text-gray-600 mt-1">Klipper + Moonraker + Mainsail/Fluidd running in Debian proot. Access via web browser.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
              <div className="text-3xl mb-2">🔧</div>
              <h3 className="font-bold text-gray-800">ST-Link V2 Flash</h3>
              <p className="text-sm text-gray-600 mt-1">Reliable firmware flashing via SWD debug pins. Bypasses SD card issues entirely.</p>
            </div>
          </div>

          {/* Architecture Diagram */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-8">
            <h3 className="font-bold text-gray-800 mb-4 text-center">How It All Connects</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
              <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4 w-48">
                <div className="text-3xl mb-2">📱</div>
                <div className="font-bold text-blue-800 text-sm">Galaxy Tab SM-T395</div>
                <div className="text-xs text-blue-600 mt-1">Termux + proot Debian</div>
                <div className="text-xs text-gray-500">Klipper + Moonraker + Mainsail</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-xs text-gray-500 mb-1">WiFi / USB OTG</div>
                <div className="text-2xl">⇄</div>
              </div>
              <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4 w-48">
                <div className="text-3xl mb-2">🖨️</div>
                <div className="font-bold text-green-800 text-sm">Ender 3 V3 SE</div>
                <div className="text-xs text-green-600 mt-1">Klipper Firmware</div>
                <div className="text-xs text-gray-500">STM32F103 MCU</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-xs text-gray-500 mb-1">SWD (one-time)</div>
                <div className="text-2xl">⇄</div>
              </div>
              <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-4 w-48">
                <div className="text-3xl mb-2">🔧</div>
                <div className="font-bold text-orange-800 text-sm">ST-Link V2</div>
                <div className="text-xs text-orange-600 mt-1">Firmware Flash</div>
                <div className="text-xs text-gray-500">One-time setup</div>
              </div>
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
              <a href="https://www.klipper3d.org/" target="_blank" rel="noopener" className="text-blue-600 hover:underline">Klipper Docs</a>
              <a href="https://github.com/utkabobr/BeamKlipper" target="_blank" rel="noopener" className="text-blue-600 hover:underline">BeamKlipper</a>
              <a href="https://www.klipper3d.org/Bootloaders.html" target="_blank" rel="noopener" className="text-blue-600 hover:underline">Bootloaders Guide</a>
              <a href="https://pblvsky.gitbook.io/ender3v3se/" target="_blank" rel="noopener" className="text-blue-600 hover:underline">Ender 3 V3 SE Wiki</a>
              <a href="https://github.com/d4rk50ul1/klipper-on-android" target="_blank" rel="noopener" className="text-blue-600 hover:underline">Klipper on Android (Termux)</a>
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
