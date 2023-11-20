// LanguageSwitcher.js
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { setLanguageToLocalStorage } from '../i18n';

function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const [showOptions, setShowOptions] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setShowOptions(false);
    setLanguageToLocalStorage(lng)

  };

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div className="language-selector">
      <div className="select-wrapper">
        <div className="select" onClick={toggleOptions}>
          {i18n.language === 'en' ? 'English' : 'Tiếng Việt'}
        </div>
        {showOptions && (
          <div className="option-list">
            <div className="option" onClick={() => changeLanguage('en')}>
              {t("en")}
            </div>
            <div className="option" onClick={() => changeLanguage('vi')}>
              {t("vi")}
            </div>
            {/* Add more language options as needed */}
          </div>
        )}
      </div>
    </div>
  );
}

export default LanguageSwitcher;
