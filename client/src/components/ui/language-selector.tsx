import { useLanguage } from '@/contexts/LanguageContext';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './select';

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' }
  ];

  return (
    <Select value={language} onValueChange={(value: 'en' | 'ar' | 'fr') => setLanguage(value)}>
      <SelectTrigger className="w-32 bg-white/10 border-white/20 text-white">
        <SelectValue>
          <div className="flex items-center gap-2">
            <span>{languages.find(l => l.code === language)?.flag}</span>
            <span className="hidden sm:inline">{languages.find(l => l.code === language)?.name}</span>
          </div>
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {languages.map((lang) => (
          <SelectItem key={lang.code} value={lang.code}>
            <div className="flex items-center gap-2">
              <span>{lang.flag}</span>
              <span>{lang.name}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}