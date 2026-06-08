/*
 * Copyright (C) Contributors to the Suwayomi project
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import type { MangaDownloadInfo, MangaUnreadInfo } from '@/features/manga/Manga.types.ts';

export const getMangaActionMenuVisibility = (manga: MangaDownloadInfo & MangaUnreadInfo) => {
    const {
        chapters: { totalCount },
        downloadCount,
        unreadCount,
    } = manga;
    const hasChapters = totalCount > 0;

    return {
        canDownload: hasChapters && downloadCount < totalCount,
        hasDownloadedChapters: hasChapters && downloadCount > 0,
        hasUnreadChapters: hasChapters && unreadCount > 0,
        hasReadChapters: hasChapters && unreadCount < totalCount,
    };
};
