import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333",
});

export default api;

/**
 * iOS Emulador: localhost
 * iOS dispositivo: IP da máquina
 * Android Emulador: localhost (adb reverse)
 * Android Emulador: 10.0.2.2 (Android Studio)
 * Android Emulador: 10.0.3.2 (Genymotion)
 * Android dispositivo: IP da máquina
 */
